import React, { useMemo } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import {
  sidebarConfig,
  Link,
  useSidebarOpenState,
} from '@backstage/core-components';
import {
  appThemeApiRef,
  configApiRef,
  useApi,
} from '@backstage/core-plugin-api';
import { ApertureLogoFull } from './ApertureLogoFull';
import { ApertureLogoIcon } from './ApertureLogoIcon';
import LogoFull from './LogoFull';
import LogoIcon from './LogoIcon';

interface LogoRenderProps {
  baseLogo?: string;
  defaultLogo: React.JSX.Element;
  width: string | number;
}

const LogoRender: React.FC<LogoRenderProps> = ({
  baseLogo,
  defaultLogo,
  width,
}) =>
  baseLogo ? <img src={baseLogo} alt="Home logo" width={width} /> : defaultLogo;

const useSidebarLogoStyles = makeStyles<Theme, { themeId: string }>({
  root: {
    width: sidebarConfig.drawerWidthClosed,
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: -14,
  },
  link: props => ({
    width: sidebarConfig.drawerWidthClosed,
    marginLeft: props.themeId === 'aperture' ? 15 : 24,
  }),
});

export const SidebarLogo: React.FC = () => {
  const { isOpen } = useSidebarOpenState();
  const appThemeApi = useApi(appThemeApiRef);
  const themeId = appThemeApi.getActiveThemeId();
  const classes = useSidebarLogoStyles({ themeId: themeId! });

  const configApi = useApi(configApiRef);
  const logoFullBaseURI = configApi.getOptionalString('app.branding.fullLogo');
  const fullLogoWidth = configApi
    .getOptional('app.branding.fullLogoWidth')
    ?.toString();
  const logoIconBaseURI = configApi.getOptionalString('app.branding.iconLogo');

  const fullLogo = useMemo(
    () => (themeId === 'aperture' ? <ApertureLogoFull /> : <LogoFull />),
    [themeId],
  );
  const iconLogo = useMemo(
    () => (themeId === 'aperture' ? <ApertureLogoIcon /> : <LogoIcon />),
    [themeId],
  );

  return (
    <div className={classes.root}>
      <Link to="/" underline="none" className={classes.link}>
        {isOpen ? (
          <LogoRender
            baseLogo={logoFullBaseURI}
            defaultLogo={fullLogo}
            width={fullLogoWidth ?? 110}
          />
        ) : (
          <LogoRender
            baseLogo={logoIconBaseURI}
            defaultLogo={iconLogo}
            width={28}
          />
        )}
      </Link>
    </div>
  );
};
