import React, { useState, useEffect } from 'react'
import { useSpring, config, animated } from 'react-spring'
export default function CryptoMediaFreshMintsTransition() {

    const props = useSpring({
        config: { duration: 500 },
        opacity: 1,
        from: { opacity: 0 }
    })
    return (
        <animated.div style={props} width="100vw" height="100vh"
        >
            <svg
                viewBox="-70 0 650 400" width="100vw" height="100vh"
            >
                <path
                    d="m 197.84958,273.85584 -10.64315,5.7515 10.64315,5.78116 -1.71931,2.9054 -9.9617,-6.01833 v 11.17693 h -3.37965 v -11.17693 l -9.96133,6.01833 -1.7193,-2.9054 10.64315,-5.78116 -10.64315,-5.7515 1.7193,-2.93503 9.96133,6.01833 v -11.17693 h 3.37965 v 11.17693 l 9.9617,-6.01833 z"

                    id="path1328" />
                <path
                    d="m 12.629291,156.37977 q 0,-1.86777 -1.304314,-3.17223 -1.304315,-1.30447 -3.2020163,-1.30447 -1.9268032,0 -3.2314961,1.30447 -1.2748346,1.27483 -1.2748346,3.17223 0,1.92703 1.2748346,3.23149 1.3046929,1.27484 3.2314961,1.27484 1.8977013,0 3.2020163,-1.30447 1.304314,-1.30446 1.304314,-3.20186 z m 3.617008,0 q 0,3.4094 -2.371653,5.78116 -2.342173,2.37173 -5.7516853,2.37173 -3.4091339,0 -5.7811654,-2.37173 Q 0,159.78917 0,156.37977 q 0,-3.4094 2.3417953,-5.75154 2.3720315,-2.37172 5.7811654,-2.37172 3.4095123,0 5.7516853,2.37172 2.371653,2.34214 2.371653,5.75154 z"

                    id="path1330" />
                <path
                    d="m 43.151623,245.07863 h 6.255496 v 7.53033 h -6.255496 z"

                    id="path1332" />
                <path
                    d="m 422.82747,8.1232631 q 0,-1.867767 -1.30432,-3.1722331 -1.30469,-1.3044662 -3.20201,-1.3044662 -1.9268,0 -3.2315,1.3044662 -1.27483,1.2748346 -1.27483,3.1722331 0,1.9270299 1.27483,3.2314959 1.3047,1.274835 3.2315,1.274835 1.89732,0 3.20201,-1.304466 1.30432,-1.304466 1.30432,-3.2018649 z m 3.61701,0 q 0,3.4093989 -2.37166,5.7811649 -2.34217,2.37173 -5.75168,2.37173 -3.40914,0 -5.78117,-2.37173 -2.34217,-2.371766 -2.34217,-5.7811649 0,-3.4093985 2.34217,-5.7515339 Q 414.912,0 418.32114,0 q 3.40951,0 5.75168,2.3717292 2.37166,2.3421354 2.37166,5.7515339 z"

                    id="path1334" />
                <path
                    d="m 471.8589,80.102476 q 4.59515,0 8.77531,-1.749165 3.97266,-1.660233 7.38217,-5.039962 3.3207,-3.290835 5.01052,-7.382098 1.71931,-4.091301 1.71931,-8.864466 0,4.654601 1.63049,8.686564 1.63086,4.032 5.09934,7.56 3.20201,3.261165 7.38217,5.039962 4.15068,1.749165 8.77569,1.749165 -4.62501,0 -8.77569,1.749166 -4.18016,1.778834 -7.38217,5.04 -3.46848,3.528 -5.09934,7.559962 -1.63049,4.032 -1.63049,8.686566 0,-4.773167 -1.71931,-8.86443 -1.68982,-4.091301 -5.01052,-7.382098 -3.40951,-3.379767 -7.38217,-5.04 -4.18016,-1.749166 -8.77531,-1.749166 z"

                    id="path1336" />
                <path
                    d="m 90.191245,29.601714 h 6.255496 v 7.53033 h -6.255496 z"

                    id="path1338" />
                <path
                    d="m 75.418961,73.842256 h 6.255497 v 7.530331 h -6.255497 z"

                    id="path1340" />
                <path
                    d="m 293.84693,77.34739 h 6.2555 v 7.530331 h -6.2555 z"

                    id="path1342" />
                <path
                    d="m 369.0618,45.714634 -10.64353,5.751496 10.64353,5.781165 -1.71969,2.905399 -9.96132,-6.018331 v 11.176932 h -3.37965 V 54.134363 l -9.9617,6.018331 -1.71931,-2.905399 10.64315,-5.781165 -10.64315,-5.751496 1.71931,-2.93503 9.9617,6.01833 V 37.621002 h 3.37965 v 11.176932 l 9.96132,-6.01833 z"

                    id="path1344" />
                <path
                    d="m 348.04082,245.07863 h 6.2555 v 7.53033 h -6.2555 z"

                    id="path1346" />
                <path
                    d="m 51.277229,33.950325 -10.64315,5.751496 10.64315,5.781165 -1.719307,2.905399 -9.961323,-6.018331 V 53.546986 H 36.216567 V 42.370054 l -9.961323,6.018331 -1.719307,-2.905399 10.64315,-5.781165 -10.64315,-5.751496 1.719307,-2.93503 9.961323,6.018331 V 25.856693 h 3.380032 v 11.176933 l 9.961323,-6.018331 z"

                    id="path1348" />
                <path
                    d="m 144.2589,70.104303 q 0,-1.867767 -1.30469,-3.172233 -1.30432,-1.304466 -3.20164,-1.304466 -1.92718,0 -3.23188,1.304466 -1.27445,1.274835 -1.27445,3.172233 0,1.92703 1.27445,3.231496 1.3047,1.274835 3.23188,1.274835 1.89732,0 3.20164,-1.304466 1.30469,-1.304466 1.30469,-3.201865 z m 3.61663,0 q 0,3.409399 -2.37165,5.781166 -2.34218,2.371729 -5.75131,2.371729 -3.40951,0 -5.78117,-2.371729 -2.34217,-2.371767 -2.34217,-5.781166 0,-3.409398 2.34217,-5.751534 2.37166,-2.371729 5.78117,-2.371729 3.40913,0 5.75131,2.371729 2.37165,2.342136 2.37165,5.751534 z"

                    id="path1350" />
                <path
                    d="m 433.4744,206.82558 h 6.25549 v 7.53033 h -6.25549 z"

                    id="path1352" />
                <path
                    d="m 537.92996,207.42701 q 0,-1.86776 -1.30469,-3.17223 -1.30432,-1.30447 -3.20164,-1.30447 -1.92718,0 -3.23188,1.30447 -1.27483,1.27483 -1.27483,3.17223 0,1.92703 1.27483,3.2315 1.3047,1.27483 3.23188,1.27483 1.89732,0 3.20164,-1.30446 1.30469,-1.30447 1.30469,-3.20187 z m 3.61663,0 q 0,3.4094 -2.37166,5.78117 -2.34217,2.37173 -5.7513,2.37173 -3.40951,0 -5.78117,-2.37173 -2.34217,-2.37177 -2.34217,-5.78117 0,-3.4094 2.34217,-5.75153 2.37166,-2.37173 5.78117,-2.37173 3.40913,0 5.7513,2.37173 2.37166,2.34213 2.37166,5.75153 z"

                    id="path1354" />
                <path
                    d="m 255.36681,214.96728 h 6.25549 v 7.53034 h -6.25549 z"

                    id="path1356" />
                <g
                    aria-label="Fresh Mints"
                    id="text1326"

                    transform="matrix(3.7795276,0,0,3.7795276,5758.4811,-650.31663)">
                    <path
                        d="m -1502.4728,201.90406 v 13.04235 h 2.8679 v -5.38865 h 5.4617 v -2.22852 h -5.4617 v -3.01399 h 6.302 v -2.41119 z"

                        id="path1515" />
                    <path
                        d="m -1491.901,205.50258 v 9.44383 h 2.5939 v -4.25612 q 0,-0.63933 0.1279,-1.18733 0.1278,-0.54799 0.4201,-0.94986 0.3105,-0.42013 0.8037,-0.6576 0.4932,-0.23746 1.2056,-0.23746 0.2375,0 0.4932,0.0365 0.2557,0.0183 0.4384,0.0548 v -2.41119 q -0.3105,-0.0913 -0.5663,-0.0913 -0.4931,0 -0.9498,0.14613 -0.4567,0.14613 -0.8585,0.42013 -0.4019,0.25573 -0.7124,0.63933 -0.3106,0.36533 -0.4932,0.80373 h -0.037 v -1.75359 z"

                        id="path1517" />
                    <path
                        d="m -1478.7656,209.2107 h -4.2196 q 0.018,-0.274 0.1096,-0.62107 0.1096,-0.34706 0.3471,-0.65759 0.2557,-0.31054 0.6576,-0.51147 0.4201,-0.2192 1.0412,-0.2192 0.9499,0 1.4065,0.51147 0.475,0.51146 0.6576,1.49786 z m -4.2196,1.64399 h 6.8135 q 0.073,-1.09599 -0.1827,-2.10066 -0.2557,-1.00466 -0.8402,-1.79012 -0.5663,-0.78547 -1.4614,-1.24213 -0.895,-0.47493 -2.1006,-0.47493 -1.0778,0 -1.9728,0.3836 -0.8768,0.38359 -1.5161,1.05946 -0.6394,0.6576 -0.9864,1.57093 -0.3471,0.91333 -0.3471,1.97279 0,1.09599 0.3288,2.00932 0.3471,0.91333 0.9681,1.57093 0.6211,0.6576 1.5161,1.02293 0.8951,0.34707 2.0094,0.34707 1.6074,0 2.74,-0.73067 1.1325,-0.73066 1.6805,-2.42945 h -2.2833 q -0.1279,0.43839 -0.6942,0.84026 -0.5662,0.3836 -1.3517,0.3836 -1.096,0 -1.6805,-0.56627 -0.5846,-0.56626 -0.6394,-1.82666 z"

                        id="path1519" />
                    <path
                        d="m -1472.624,211.87762 h -2.466 q 0.036,0.94987 0.4201,1.5892 0.4019,0.62106 1.0047,1.00466 0.6211,0.3836 1.4065,0.548 0.7855,0.1644 1.6075,0.1644 0.8037,0 1.5709,-0.1644 0.7855,-0.14614 1.3883,-0.52973 0.6028,-0.3836 0.9681,-1.00467 0.3836,-0.63933 0.3836,-1.57092 0,-0.6576 -0.2557,-1.096 -0.2557,-0.45667 -0.6759,-0.74893 -0.4201,-0.31053 -0.9681,-0.4932 -0.5297,-0.18267 -1.096,-0.31053 -0.548,-0.12787 -1.0777,-0.23747 -0.5298,-0.1096 -0.9499,-0.23746 -0.4019,-0.14614 -0.6576,-0.36533 -0.2557,-0.2192 -0.2557,-0.56627 0,-0.29227 0.1461,-0.45666 0.1461,-0.18267 0.3471,-0.274 0.2192,-0.0913 0.4749,-0.1096 0.2557,-0.0365 0.4749,-0.0365 0.6942,0 1.2056,0.274 0.5115,0.25574 0.5663,1.00467 h 2.466 q -0.073,-0.8768 -0.4567,-1.44307 -0.3653,-0.58453 -0.9316,-0.93159 -0.5662,-0.34707 -1.2969,-0.4932 -0.7124,-0.14613 -1.4796,-0.14613 -0.7672,0 -1.4979,0.14613 -0.7306,0.12787 -1.3152,0.47493 -0.5845,0.3288 -0.9498,0.91333 -0.3471,0.58453 -0.3471,1.49786 0,0.62107 0.2557,1.05947 0.2558,0.42013 0.6759,0.71239 0.4201,0.274 0.9499,0.45667 0.548,0.1644 1.1142,0.29226 1.3883,0.29227 2.1555,0.58453 0.7855,0.29227 0.7855,0.8768 0,0.34707 -0.1644,0.58453 -0.1644,0.2192 -0.4202,0.36533 -0.2374,0.12787 -0.548,0.20094 -0.2922,0.0548 -0.5662,0.0548 -0.3836,0 -0.749,-0.0913 -0.347,-0.0913 -0.621,-0.274 -0.274,-0.20093 -0.4567,-0.49319 -0.1644,-0.31054 -0.1644,-0.73067 z"

                        id="path1521" />
                    <path
                        d="m -1464.8222,201.90406 v 13.04235 h 2.5939 v -4.95025 q 0,-1.44306 0.4749,-2.06412 0.475,-0.63933 1.5344,-0.63933 0.9316,0 1.297,0.58453 0.3653,0.56626 0.3653,1.73532 v 5.33385 h 2.5938 v -5.80878 q 0,-0.87679 -0.1644,-1.58919 -0.1461,-0.73067 -0.5297,-1.22386 -0.3836,-0.51147 -1.0594,-0.78547 -0.6576,-0.29226 -1.6988,-0.29226 -0.7307,0 -1.4979,0.3836 -0.7672,0.36533 -1.2604,1.18732 h -0.055 v -4.91371 z"

                        id="path1523" />
                    <path
                        d="m -1448.6362,201.90406 v 13.04235 h 2.6852 v -9.15157 h 0.036 l 3.1966,9.15157 h 2.2103 l 3.1967,-9.2429 h 0.036 v 9.2429 h 2.6852 v -13.04235 h -4.0369 l -2.8862,8.9689 h -0.036 l -3.0505,-8.9689 z"

                        id="path1525" />
                    <path
                        d="m -1429.6892,204.04125 v -2.13719 h -2.5939 v 2.13719 z m -2.5939,1.46133 v 9.44383 h 2.5939 v -9.44383 z"

                        id="path1527" />
                    <path
                        d="m -1427.6468,205.50258 v 9.44383 h 2.5939 v -4.95025 q 0,-1.44306 0.4749,-2.06412 0.4749,-0.63933 1.5344,-0.63933 0.9316,0 1.2969,0.58453 0.3654,0.56626 0.3654,1.73532 v 5.33385 h 2.5938 v -5.80878 q 0,-0.87679 -0.1644,-1.58919 -0.1461,-0.73067 -0.5297,-1.22386 -0.3836,-0.51147 -1.0595,-0.78547 -0.6576,-0.29226 -1.6988,-0.29226 -0.822,0 -1.6074,0.3836 -0.7855,0.36533 -1.2787,1.18732 h -0.055 v -1.31519 z"

                        id="path1529" />
                    <path
                        d="m -1413.513,205.50258 v -2.83132 h -2.5938 v 2.83132 h -1.571 v 1.73533 h 1.571 v 5.57131 q 0,0.7124 0.2374,1.15079 0.2375,0.4384 0.6393,0.67587 0.4202,0.23746 0.9499,0.31053 0.548,0.0913 1.1508,0.0913 0.3836,0 0.7855,-0.0183 0.4018,-0.0183 0.7306,-0.0731 v -2.00932 q -0.1826,0.0365 -0.3836,0.0548 -0.2009,0.0183 -0.4201,0.0183 -0.6576,0 -0.8768,-0.2192 -0.2192,-0.2192 -0.2192,-0.87679 v -4.67625 h 1.8997 v -1.73533 z"

                        id="path1531" />
                    <path
                        d="m -1408.3698,211.87762 h -2.466 q 0.037,0.94987 0.4201,1.5892 0.4019,0.62106 1.0047,1.00466 0.6211,0.3836 1.4065,0.548 0.7855,0.1644 1.6075,0.1644 0.8037,0 1.5709,-0.1644 0.7855,-0.14614 1.3883,-0.52973 0.6028,-0.3836 0.9681,-1.00467 0.3836,-0.63933 0.3836,-1.57092 0,-0.6576 -0.2557,-1.096 -0.2558,-0.45667 -0.6759,-0.74893 -0.4201,-0.31053 -0.9681,-0.4932 -0.5297,-0.18267 -1.096,-0.31053 -0.548,-0.12787 -1.0777,-0.23747 -0.5298,-0.1096 -0.9499,-0.23746 -0.4019,-0.14614 -0.6576,-0.36533 -0.2557,-0.2192 -0.2557,-0.56627 0,-0.29227 0.1461,-0.45666 0.1461,-0.18267 0.3471,-0.274 0.2192,-0.0913 0.4749,-0.1096 0.2557,-0.0365 0.4749,-0.0365 0.6942,0 1.2056,0.274 0.5115,0.25574 0.5663,1.00467 h 2.466 q -0.073,-0.8768 -0.4567,-1.44307 -0.3653,-0.58453 -0.9316,-0.93159 -0.5663,-0.34707 -1.2969,-0.4932 -0.7124,-0.14613 -1.4796,-0.14613 -0.7672,0 -1.4979,0.14613 -0.7306,0.12787 -1.3152,0.47493 -0.5845,0.3288 -0.9498,0.91333 -0.3471,0.58453 -0.3471,1.49786 0,0.62107 0.2557,1.05947 0.2558,0.42013 0.6759,0.71239 0.4201,0.274 0.9499,0.45667 0.548,0.1644 1.1142,0.29226 1.3883,0.29227 2.1555,0.58453 0.7855,0.29227 0.7855,0.8768 0,0.34707 -0.1644,0.58453 -0.1644,0.2192 -0.4202,0.36533 -0.2374,0.12787 -0.548,0.20094 -0.2922,0.0548 -0.5662,0.0548 -0.3836,0 -0.749,-0.0913 -0.347,-0.0913 -0.621,-0.274 -0.274,-0.20093 -0.4567,-0.49319 -0.1644,-0.31054 -0.1644,-0.73067 z"

                        id="path1533" />
                </g>
                <path
                    d="m 420.45619,264.7801 q 0,-1.86777 -1.30469,-3.17224 -1.30431,-1.30442 -3.20164,-1.30442 -1.92718,0 -3.23187,1.30442 -1.27446,1.27484 -1.27446,3.17224 0,1.92703 1.27446,3.23149 1.30469,1.27488 3.23187,1.27488 1.89733,0 3.20164,-1.30447 1.30469,-1.30447 1.30469,-3.2019 z m 3.61663,0 q 0,3.40943 -2.37165,5.78116 -2.34217,2.37177 -5.75131,2.37177 -3.40951,0 -5.78116,-2.37177 -2.34218,-2.37173 -2.34218,-5.78116 0,-3.4094 2.34218,-5.7515 2.37165,-2.37177 5.78116,-2.37177 3.40914,0 5.75131,2.37177 2.37165,2.3421 2.37165,5.7515 z"

                    id="path1350-4" />
                <path
                    d="m 161.29777,41.393008 q 4.59515,0 8.7753,-1.749165 3.97266,-1.660233 7.38218,-5.039962 3.32069,-3.290835 5.01052,-7.382098 1.7193,-4.091301 1.7193,-8.864466 0,4.654601 1.63049,8.686564 1.63087,4.032 5.09934,7.56 3.20202,3.261165 7.38217,5.039962 4.15068,1.749165 8.77569,1.749165 -4.62501,0 -8.77569,1.749166 -4.18015,1.778834 -7.38217,5.04 -3.46847,3.528 -5.09934,7.559962 -1.63049,4.032 -1.63049,8.686564 0,-4.773165 -1.7193,-8.864429 -1.68983,-4.0913 -5.01052,-7.382097 -3.40952,-3.379767 -7.38218,-5.04 -4.18015,-1.749166 -8.7753,-1.749166 z"

                    id="path1336-5" />
                <path
                    d="m 317.02224,226.78753 -10.64353,5.7515 10.64353,5.78116 -1.71969,2.9054 -9.96132,-6.01833 v 11.17693 h -3.37965 v -11.17693 l -9.9617,6.01833 -1.71931,-2.9054 10.64315,-5.78116 -10.64315,-5.7515 1.71931,-2.93503 9.9617,6.01833 V 218.6939 h 3.37965 v 11.17693 l 9.96132,-6.01833 z"

                    id="path1344-0" />
                <path
                    d="m 362.00126,222.98173 q 4.59515,0 8.77531,-1.74916 3.97266,-1.66023 7.38217,-5.03996 3.3207,-3.29084 5.01052,-7.3821 1.71931,-4.0913 1.71931,-8.86447 0,4.6546 1.63049,8.68657 1.63087,4.032 5.09934,7.56 3.20201,3.26116 7.38217,5.03996 4.15068,1.74916 8.77569,1.74916 -4.62501,0 -8.77569,1.74917 -4.18016,1.77883 -7.38217,5.04 -3.46847,3.528 -5.09934,7.55996 -1.63049,4.032 -1.63049,8.68657 0,-4.77317 -1.71931,-8.86443 -1.68982,-4.0913 -5.01052,-7.3821 -3.40951,-3.37977 -7.38217,-5.04 -4.18016,-1.74917 -8.77531,-1.74917 z"

                    id="path1336-57" />
            </svg>

        </animated.div>
    )
}
