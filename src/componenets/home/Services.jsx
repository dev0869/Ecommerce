import React from 'react'
import { Stack } from '@mui/material'
import { CardContent } from '@mui/material'

const Services = () => {
    return (
        <Stack className='servicestext' gap={1} m={4} direction={'row'} flexWrap={'wrap'} justifyContent={'center'}>
            <CardContent  className='service' sx={{ padding:'28px' }} >
                <img className='serpic' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABK0lEQVRIie2WMU7DMBSGv9K1DF269CYstN2gVa8DRdyGCwBhZWklKJSRE1COwFrCkGfJip6TZ4cICeWXHMv+/fw9J44T6NSpZc2BTyBPKHvgLBW8T4S68hEL7Emdp2aszGXSUYV3B0yAgZQpkKXnpat86y487wV49tpXyviq8i3x4zrwbcDzlUXCc+CmDnxqAE+NsBMNFgIPAt7I6zs2goOq2lxOb1I/AkPD+Cj5WU5K3gh4F28pfTMarlgD3yv+UKB9aT+0Ac4pXpmQro1QU0KamVHsXneAzCJWWgv+zSMzRj3Lrm5FfwreBLxLime7Spy7Kn7jLtoGcCeY9ZSKiV9rmW7FXEmw+xo9GVeaHL8ADqUMD8C5EdwofgHsgC/gleKfLEZN4zv9A/0AmbrnhJuqfjQAAAAASUVORK5CYII=" />
                <p style={{  lineHeight: '39px' }}>Super fast and Free Delivery</p >
            </CardContent>


            <CardContent className='services' sx={{padding:'28px'}} >
                <Stack gap={1} direction={'row'}className='st'  >
                <img className='serpics' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADzUlEQVRogdXaS4hcRRQG4C+ZQceJJsFkEUExOkrUhQs1YkQFRYyiIStB0aALUTDiYyUKghHxASKID1B8oEE3oohEJRjjYyWKoItZSEbjxiDEMU7SOslkZtpFVds9N9O377Nbfzg03bfqP+evqq6qc7qXqAcrcDNuwFj87CfswDs4WJPfyrAKj+IPNLvYQTyFkwcUYypW4UkhyG4CFhP0ROw7cKzGY/IJSNoUthmQoDPxHBoZg81ih/EWzqk7+GW4BZ9grkIBSZvDx9HXsqqCX4HN2K7a0c9qh4RZ2ozlaYEuSbw/Dpfg6mjrMVxgAOrALL7FrmhfY6b1MClkGiN9C60cDuOE1puliYdD/Y2lFBZMQlLIX30MpCwanW+SQhqqRQNP48WKeekx6D+qdtfZF3lPqZi3ifHOwOuckV+EMwf+xqc4UiF/6ozsVn6kfsbGLvyr8UIFPprag4Rjz4i9uDJNaQ/8hkvj6xm4Hmsxj2/wAe6Jfp4p4YeQFnTFw8qN0h2RZ5NwJiWff6m99+8q6euBNCE3lSCex8rIk7Zp3BXb3FhSyKY0IetLEE9GjlHpl8qPYruxkkLO6ww8+R3ZExslry5ZcGLsN4+jOL5Lu/PxoB6XwB6YxkSvRuOKj9JFkeOREhxZ7Issal8p4eBD7dm8XCg0/FmDkMezCLm9pJM3LFw2w9iAh4SdarYCIddmEXJ2BY72C+fEVTqu2hFr8W4J7hkh4cuEiQrEtGwanwtn1KkdPp4vyLczqwhC3anqdd0UllVrfY8IM5eXo3XoZsKFBRy8Gvtty9D24uhne04fM7qUjZK33xa+E+5DeTAb+32Voe258fXXnD52ax+8C9BNCKF6kQetk/YHIZ9OQ+vCd3pOHy/lbA/WCAFlnfajQgIF9wkn/GLtPhMGcDkO5OCfkD7wqXgzh6OmsOZbuE5YCgeEJGhcKHCPxucv5+S+t6gIuCCns6Yw/aOLkUWsxOs5OX/HSWWEEJKhvGL24zVsiRwj2CrM8KECfKm5R1asE9Z/XudN1RQf9up+k/4XWQpykzhNOCOKYB6X4YqC/bfi+4J9j8EaQVDRUS1qOxXLjVKxpc8iGsLvMLVgRx+F3F2XCMKXdl8fRLynhiWVxAahYliXiD1y5BtlcX9NIqaE4kRf8WwFgXfaDK7pq4KIpUJxoQoRc8KPnwPDkHDdLyvitn4HvhiGhMpJERFHcGv/Q07HnfLdySaVq/zXio3S/1DTucWuG1CMmXGWkLt3E/G+dtX+P49hId3t/LfElLD8/pcYE7boty0szlWOfwCTmQCvNPSNngAAAABJRU5ErkJggg=="/>


                <p style={{  lineHeight: '39px' }}>Non-contact Shipping</p >         
                </Stack>

                <Stack direction={'row'} gap={1}  className='st'>

                <img className='serpics' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAE5ElEQVR4nO2a3WsdRRTAf7laImlFTUStsaZoNS0VbIIftU1jtIpVEFshovgR/wER33z0zRfRKkhRaqtE8ANM3pTm1g9KfVJptYlY8aM12lakWEVu09wk14ezl+zd7Mye2b27e9H9wXBhZs7MmbnzceachYKCgoKC/y9teSugoAsYAAaBdcAVwGXAZ8BjOeqVCcPAPFALSfub0UGpGY2kyGnMq/RW4IYMdcmNVwlfATVgCmjPT7Vs6AC+wzwJz+enWnbcDFQJn4Aq0Bu34fOaoZ0DvcA24CHgEeBx5KC7G7gFWAmcQ/a+nxPAHHITPAP0ASu8shLQCYylrHts+oGXgV8xL+NgmgZ2AhsCbV3g/XYD3/rqzyFXZEsxCHyMftCmtA+4LaT9K4EffPVeSW8obnQBo8ACyQdfTwvAHuCSQF/rgL+9Or/TAtf6JuAXmjfwYPoZOSv8DLM42cEtkyk7gLOkN/h6qgD3B/p+wSu7J63BRbEDOYhcBjID/AScRAblIlulcRLagLUpjs/KJnT//AwwjizZHpbu125gBHgHmFW0V0Hsg1zpInrPzwO7kRecltXAa5iNH/+ZEDwYM2U0RCl/+g15tMRlCDndbX3sSdB+IgaxX3VTwNVN6OcqYNLSzwLhdkLq2Iyck4hZG0U/uqtrNfaVsM9R98T0W5SpIqtDQxmYUNbdjNk5UgNuVLbTQFzLacRS9gZwQNlOO4v2fRSfA29byp9QttMUTA+bGXT7/j4aHzNTwL0KuVWYr9xjTiNIQK9BgRrwrkL+DmQpHwKe8tIhL29IIT9u6f9ah3HE5lGLAratUecj5BXX4cvrAH4EPlTIj1j6f1g1Ah9xzgCb96WskO9BlnzFl1dBbIplCnmbNzi2Z8iF3YTP/jl0cYZdyD7eGlKmkS9hNpVfV8gvacyVFYb8054SUTyLbIEyshLeQ86BdqX8AnDKUHahQr6BZjoQZpX1/gJuAp5GLLz1iMvsS+CihDpkEukybYFZdBMapuSdyLbYpZDPfQucMOQvQ/x0UZSB5wJ5n3j5tyvkV2I+LE26GYkzAUctZZoBzCJBzeA1uB553kZxl6Xse4V8Yq7HfA+PK+SHWGoIHfbyNG+IMUv/axzGkYhpgwJn0W2DbcgNUJebROfPs5nCx51GkJCdBiVqwF6Hdg6gfzgBvGnp90WHdhLTZ1FkHnm6anB5Dm/B/hzO3CW+36LMKcTkjaIPneI92B0i2klsKgPYXWKTyJ5NSg8t6hIDeMuiWH0lDCRofwvRTlGXMycWW4F/gAdCyjqR09em4BziuXVxkK5CDjzbnq8hTpDU3eIPep2dQWyAIBvRB0Y+QN7z3TSaxCUWAyNjyvYqLI0TpsKlLIa9jgDLQ+psxz00NovYE9PoIkH+VCV8RaZG2df5GHB+SJ3tZBcczXTwIPE8vxKjhH9es5HoMyFJOkZGyz5ICVn+fmUmkGfs195vnU7kdmj2BxJ7yTkOGFwFdcVqSAywK1B/M41bJ26aIMd73k8b8ClmRd83yG0AXsLty5HjiG2funnr6kK6BviG8JsA5LM3W/TmOsQdthb56PliL/8MEk88CnyB+Axblicx/3N/ItHc/zxfYZ6E4Rz1cibsPtfQ6f3OA38g2+Ig8g3/wSbo1fIsBy6nBb7LKygoKCgoKCiIy79sM/rKlgzsjQAAAABJRU5ErkJggg=="/>

                <p style={{  lineHeight: '39px' }}>Money-Back Gurranted</p >         
                </Stack>
                    
            </CardContent>

            <CardContent className='service' sx={{ padding:'28px' }} >
                <img className='serpic' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlElEQVRYhe3WvU4UURjG8Z+4LIYOG4yR0hswhgIppCZRIyGxIBQaa3u5AMB4C3ADxHtAEwPRGC2sNaAQaCiwkIRiLfYdF2Z3ZpllZrXYf3JyMnPej2feM+eDAQMGnKeOVeyjUXLbw0rkyGSlgsTptpwnYC+MpvKMemRaqxKZJCqroi1+rYtx5Qz1I0keeRW4UkG+tqr2uwK73QzK/gnrzq/7OhaqFjCEB9jGabQPeKLDlKfnuZHxPo8xXMdN3MNT3I6x0+iHo/+BNWziJ47SwXqpQKfd7isWcQ2jeIGdDNvSBHzW/LpZnSt4FQ+xji+JXxlT0IvPX79/vhH9dwL2o5/ut5CEZRc/18fC51c8jxfIMx4+x+mBeohI7gV57U74bMXzXAEB8+HzvoBPJs8j2Ef5h1tCDZ/C51kZAkbwPQK+uoD967D9psv9sAiTOInAq5qbTppaCGzgN+6WlTzh8RkRb3HrzNgE3sXYCR6VnTxhBodaf/hLLGmtlAPcryp5wg280b5qNhRbqpdmRvPY3ZTz1X8ArpCm4dn6Qj4AAAAASUVORK5CYII=" />
                <p style={{  lineHeight: '39px' }}>Super Secure Payment System</p >
            </CardContent>


        </Stack>
    )
}

export default Services