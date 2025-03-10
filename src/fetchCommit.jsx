import axios from 'axios';

export const fetchLastCommitDate = async () => {
  try {
    const response = await axios.get('https://api.github.com/repos/0xcolinhenderson/portfolio/commits', {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
      }
    });
    const lastCommitDate = response.data[0].commit.committer.date;
    return new Date(lastCommitDate).toLocaleString();
  } catch (error) {
    return null;
  }
};