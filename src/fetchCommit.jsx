import axios from 'axios';

export const fetchLastCommitDate = async () => {
  try {
    const response = await axios.get('https://api.github.com/repos/0xcolinhenderson/portfolio/commits');
    const lastCommitDate = response.data[0].commit.committer.date;
    return new Date(lastCommitDate).toLocaleString();
  } catch (error) {
    console.error('Error fetching the last commit date:', error);
    return null;
  }
};