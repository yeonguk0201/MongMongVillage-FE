import { useEffect, useState } from 'react';
import {
  Container,
  CheckboxContainer,
  CheckboxText,
  Checkbox,
  Space,
  DetailText,
} from './SignUpCheckbox.styles';
import { InputStatus } from '../../libs/AuthMessage';
import { showModal } from '../../util/showAlert';

const SignUpCheckbox = ({ setCheckboxInputStatus }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [locationChecked, setLocationChecked] = useState(false);
  const [personalChecked, setPersonalChecked] = useState(false);
  const [privacyTerms, setPrivacyTerms] = useState('');
  const [positionTerms, setPositionTerms] = useState('');

  /* 이용약관 텍스트 불러오기 */
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/terms/privacyTerms.txt`)
      .then((response) => response.text())
      .then((text) => {
        setPrivacyTerms(text);
      });
    fetch(`${process.env.PUBLIC_URL}/terms/positionTerms.txt`)
      .then((response) => response.text())
      .then((text) => {
        setPositionTerms(text);
      });
  }, []);

  const showTermsModal = (targetTerms) => {
    const wrapper = document.createElement('div');
    wrapper.style = 'font-size:14px;text-align:left';
    wrapper.innerHTML = targetTerms;
    if (targetTerms === privacyTerms) {
      showModal('개인정보 수집 이용 약관', wrapper, () =>
        setPersonalChecked(true),
      );
    } else {
      showModal('위치기반 서비스 이용 약관', wrapper, () =>
        setLocationChecked(true),
      );
    }
  };

  const handleAllCheckedChange = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    if (newAllChecked) {
      setLocationChecked(true);
      setPersonalChecked(true);
    } else {
      setLocationChecked(false);
      setPersonalChecked(false);
    }
  };

  const handleBottomCheckboxChange = (setterFunction) => {
    setterFunction((prevState) => !prevState);
  };

  useEffect(() => {
    // 모든 하단 체크박스가 체크되었는지 확인
    const areAllBottomChecked = locationChecked && personalChecked;
    if (areAllBottomChecked !== allChecked) {
      setAllChecked(areAllBottomChecked);
    }

    setCheckboxInputStatus(
      areAllBottomChecked ? InputStatus.SUCCESS : InputStatus.ERROR,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationChecked, personalChecked]);

  return (
    <Container>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          checked={allChecked}
          onChange={handleAllCheckedChange}
        />
        <CheckboxText onClick={handleAllCheckedChange}>모두 동의</CheckboxText>
      </CheckboxContainer>
      <CheckboxContainer>
        <Space />
        <Checkbox
          type="checkbox"
          checked={personalChecked}
          onChange={() => handleBottomCheckboxChange(setPersonalChecked)}
        />
        <CheckboxText
          onClick={() => handleBottomCheckboxChange(setPersonalChecked)}
        >
          개인정보 이용 동의
        </CheckboxText>
        <DetailText onClick={() => showTermsModal(privacyTerms)}>
          자세히
        </DetailText>
      </CheckboxContainer>
      <CheckboxContainer>
        <Space />
        <Checkbox
          type="checkbox"
          checked={locationChecked}
          onChange={() => handleBottomCheckboxChange(setLocationChecked)}
        />
        <CheckboxText
          onClick={() => handleBottomCheckboxChange(setLocationChecked)}
        >
          위치기반 서비스 이용 동의
        </CheckboxText>
        <DetailText onClick={() => showTermsModal(positionTerms)}>
          자세히
        </DetailText>
      </CheckboxContainer>
    </Container>
  );
};

export default SignUpCheckbox;
