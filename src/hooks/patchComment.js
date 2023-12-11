import { instance } from '.';
import { useMutation, useQueryClient } from 'react-query';
import { showAlert } from '../util/showAlert';

const patchComment = async (commentId, boardId, content) => {
  const response = await instance.patch(
    `/comments/${commentId}/boards/${boardId}`,
    { content },
  );

  if (response) return response;
};

export function usePatchComment(commentId, boardId, content) {
  const queryClient = useQueryClient();

  return useMutation(() => patchComment(commentId, boardId, content), {
    onSuccess: () => {
      showAlert('', '댓글이 수정되었습니다.', 'success');
      queryClient.invalidateQueries(['myComments']);
      queryClient.invalidateQueries(['getBoard' + boardId]);
    },

    onError: (error) => {
      showAlert('', error.response + '댓글 수정을 할 수 없습니다.', 'error');
    },
  });
}
