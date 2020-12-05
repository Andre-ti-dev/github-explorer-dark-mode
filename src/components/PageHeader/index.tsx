import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { useThemeSwitcher } from '../../contexts/ThemeSwitcher';

import { Header } from './styles';

import logoImg from '../../assets/logo.svg';
import logoImgDark from '../../assets/logo-dark.svg';

interface PageHeaderProps {
  redirectToBack?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ redirectToBack }) => {
  const { theme } = useThemeSwitcher();
  const { goBack } = useHistory();

  return (
    <Header>
      <img
        src={theme === 'light' ? logoImg : logoImgDark}
        alt="Github Explorer"
      />
      {redirectToBack && (
        <button type="button" onClick={goBack}>
          <FiChevronLeft size={16} />
          Voltar
        </button>
      )}
    </Header>
  );
};

PageHeader.defaultProps = {
  redirectToBack: false,
};
PageHeader.propTypes = {
  redirectToBack: PropTypes.bool,
};

export default PageHeader;
