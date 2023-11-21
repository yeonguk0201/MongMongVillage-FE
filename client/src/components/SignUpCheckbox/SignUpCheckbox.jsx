import { useEffect, useState } from 'react';
import {
  Container,
  CheckboxContainer,
  CheckboxText,
  Checkbox,
  Space,
} from './styles';
import { InputStatus } from '../../libs';

const SignUpCheckbox = ({ setCheckboxInputStatus }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [locationChecked, setLocationChecked] = useState(false);
  const [ageChecked, setAgeChecked] = useState(false);

  const handleAllCheckedChange = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    if (newAllChecked) {
      setLocationChecked(true);
      setAgeChecked(true);
    } else {
      setLocationChecked(false);
      setAgeChecked(false);
    }
  };

  const handleIndividualCheckboxChange = (setterFunction) => {
    setterFunction((prevState) => !prevState);
  };

  useEffect(() => {
    // 모두 동의 체크박스 상태가 변경될 때만 실행
    if (allChecked) {
      setLocationChecked(true);
      setAgeChecked(true);
      setCheckboxInputStatus(InputStatus.SUCCESS);
    } else {
      setCheckboxInputStatus(false);
    }
  }, [allChecked, setCheckboxInputStatus]);

  useEffect(() => {
    // 개별 체크박스 상태가 변경될 때만 실행
    if (locationChecked && ageChecked) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [locationChecked, ageChecked]);

  return (
    <Container>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          checked={allChecked}
          onChange={handleAllCheckedChange}
        />
        <CheckboxText>모두 동의</CheckboxText>
      </CheckboxContainer>
      <CheckboxContainer>
        <Space />
        <Checkbox
          type="checkbox"
          checked={locationChecked}
          onChange={() => handleIndividualCheckboxChange(setLocationChecked)}
        />
        <CheckboxText>위치기반 서비스 이용 동의</CheckboxText>
      </CheckboxContainer>
      <CheckboxContainer>
        <Space />
        <Checkbox
          type="checkbox"
          checked={ageChecked}
          onChange={() => handleIndividualCheckboxChange(setAgeChecked)}
        />
        <CheckboxText>만 14세 이상입니다.</CheckboxText>
      </CheckboxContainer>
    </Container>
  );
};

export default SignUpCheckbox;
