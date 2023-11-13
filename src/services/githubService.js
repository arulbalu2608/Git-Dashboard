// githubService.js

import axios from 'axios';

const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const axiosInstance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

const githubService = {
  getUser: async (username) => {
    try {
      const response = await axiosInstance.post('', {
        query: `query GetGitHubInfo($username: String!) {
          user(login: $username) {
            login
            name
            avatarUrl
            following {
              totalCount
            }
            followers {
              totalCount
            }
            email
            repositories(first:100,orderBy: {field: CREATED_AT, direction: DESC}) {
              totalCount
              nodes {
                name
                stargazerCount
                forkCount
                updatedAt
                primaryLanguage {
                  name
                }
                defaultBranchRef {
                  target {
                    ... on Commit {
                      history {
                        totalCount
                      }
                    }
                  }
                }
                pullRequests {
                  totalCount
                }
                issues(states: OPEN) {
                  totalCount
                }
              }
            }
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
            public_repos: repositories(isFork: false) {
              totalCount
            }
          }
        }
        
    `,
        variables: { username },

      });

      return response.data.data.user;
    } catch (error) {
      console.error('GitHub API request error', error)
    }
  },
};

export default githubService;
