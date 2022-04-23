import { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const Home: NextPage = () => {
  const { t, ready } = useTranslation('common');
  
  return (
    <Wrapper>
      {ready ? t('hello') : ''}
    </Wrapper>
  )
}


const Wrapper = styled.div`
  background-color: papayawhip
`;

export default Home;