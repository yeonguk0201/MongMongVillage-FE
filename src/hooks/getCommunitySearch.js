import { instance } from '.';
import { useQuery } from 'react-query';
import { showAlert } from '../util/showAlert';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../routes/Routes';

const getCommunitySearch = async (searchTerm, currentPage) => {
  try {
    let url = '/boards';

    if (searchTerm && currentPage) {
      url += `/search?content=${searchTerm}&currentPage=${currentPage}`;
    }

    const response = await instance.get(url);
    if (response.data) return response?.data;
  } catch (error) {
    throw new Error(`Failed to fetch search Content: ${error.message}`);
  }
};

export function useGetCommunitySearch(searchTerm, currentPage) {
  const navigate = useNavigate();

  return useQuery(
    ['getCommunitySearch', searchTerm, currentPage],
    () => getCommunitySearch(searchTerm, currentPage),
    {
      retry: false,
      onError: (error) => {
        showAlert(
          '',
          `${searchTerm}(으)로 검색 결과가 없습니다.`,
          'warning',
          () => {
            navigate(ROUTE.COMMUNITY_PAGE.link + '/?page=' + currentPage);
          },
        );
        console.error('Failed to fetch search Content:', error.message);
      },
    },
  );
}
