/*
  Mixins for Style.
*/

import { css } from 'styled-components'
import { BREAK_POINT_WIDTH } from '@/styles/StyleConstants'
import { BreakPointWidthMember, BreakPointMember } from '@/types/type'
import Logo from '@/materials/images/logo.webp'

// Break Point.
/*
Usage.
Small Mobile.  => ${BreakPoint.smallMobile` Add CSS Property `}
Mobile.        => ${BreakPoint.mobile` Add CSS Property `}
Large Mobile.  => ${BreakPoint.largeMobile` Add CSS Property `}
Tablet.        => ${BreakPoint.tablet` Add CSS Property `}
Desktop.       => ${BreakPoint.desktop` Add CSS Property `}
Large Desktop. => ${BreakPoint.largeDesktop` Add CSS Property `}
Extra Large Desktop. => ${BreakPoint.extraLargeDesktop` Add CSS Property `}
*/
export const BreakPoint = Object.keys(BREAK_POINT_WIDTH).reduce((accumulator, current): BreakPointMember => {
  const breakPointKey = current as keyof BreakPointWidthMember
  accumulator[breakPointKey] = (args: TemplateStringsArray): import('styled-components').FlattenSimpleInterpolation => css`
    @media (min-width: ${BREAK_POINT_WIDTH[breakPointKey]}px) {
      ${css(args)};
    }
  `
  return accumulator
}, {} as BreakPointMember)

export const PagesStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-repeat: no-repeat;
  background-size: 25% auto;
  background-position: 80% center;
  background-image: url(${Logo});
`
