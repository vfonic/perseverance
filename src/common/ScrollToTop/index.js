import SvgIcon from '../../common/SvgIcon';
import scrollTop from '../../img/svg/scroll-top.svg'

import * as S from './styles';

const Input = () => {
  const scrollUp = () => {
    const element = document.body
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  return (
    <S.Up onClick={scrollUp}>
      <SvgIcon src={scrollTop} width="26px" height="26px" />
    </S.Up>
  );
};

export default Input;
