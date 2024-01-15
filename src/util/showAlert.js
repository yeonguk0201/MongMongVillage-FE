import Swal from 'sweetalert2';

export const showAlert = (title, text, icon, onConfirm) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: '확인',

    customClass: {
      confirmButton: 'swal-button',
    },
  }).then((result) => {
    if (result.isConfirmed && onConfirm) {
      onConfirm();
    } else {
    }
  });
};

export const showConfirm = (title, denyButtonText, onDeined) => {
  Swal.fire({
    title: title,
    showDenyButton: true,
    showCancelButton: true,
    showConfirmButton: false,
    denyButtonText: denyButtonText,
    cancelButtonText: '취소',
    reverseButtons: true,
  }).then((result) => {
    if (result.isDenied) {
      onDeined();
    }
  });
};

export const showModal = (title, wrapper, onConfirm) => {
  Swal.fire({
    title: title,
    html: wrapper,
    icon: null,
    showCancelButton: true,
    confirmButtonText: '동의',
    cancelButtonText: '닫기',
    customClass: 'swal2-modal-height',
  }).then((result) => {
    if (result.isConfirmed && onConfirm) {
      onConfirm();
    }
  });
};
