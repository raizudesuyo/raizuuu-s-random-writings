import React, { useEffect } from 'react'
import { AdsenseBannerStyled } from '../../styled/Components/AdsenseBanner';

interface BannerProps {
  className?: string
  style?: React.CSSProperties
  layout?: string
  format?: string
  client?: string
  responsive?: string
  slot: string
  layoutKey?: string
}

declare global {
  interface Window {
    adsbygoogle: any
  }
}

const AdsenseBanner: React.FC<BannerProps> = ({
  style,
  layout,
  format,
  client = 'ca-pub-8836086270626871',
  slot,
  responsive,
  layoutKey,
}) => {
  useEffect(() => {
    try {
      const adsbygoogle = window.adsbygoogle || []
      adsbygoogle.push({})
    } catch (e) {
      console.error(e)
    }
  }, [])
  return (
    <AdsenseBannerStyled>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-layout={layout}
        data-ad-format={format}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-layout-key={layoutKey}
        data-full-width-responsive={responsive}
        data-adtest={true}
      />
    </AdsenseBannerStyled>
  )
}

export default AdsenseBanner