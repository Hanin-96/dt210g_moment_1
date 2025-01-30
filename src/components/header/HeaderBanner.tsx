import headerBannerWebp from '../../assets/header-banner.webp';
import headerBannerjpg from '../../assets/header-banner.jpg';
import headerStyle from'./HeaderBanner.module.css';

function HeaderBanner({ headerTitle }: { headerTitle: string }) {
  return (
    <>
      <header>
        <picture>
          <source srcSet={`${headerBannerWebp}`} />
          <img src={`${headerBannerWebp}`} alt="banner" />
        </picture>
        <h1 className={headerStyle.bannerTitle}>{headerTitle}</h1>
      </header>
    </>
  )
}

export default HeaderBanner