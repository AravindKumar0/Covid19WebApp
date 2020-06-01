import React from 'react';
import * as Icon from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer(props) {
  const {t} = useTranslation();

  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      <h5>{t('We stand with everyone fighting on the frontlines')}</h5>
    </footer>
  );
}

export default React.memo(Footer);
