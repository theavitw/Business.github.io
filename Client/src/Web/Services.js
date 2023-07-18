import "./Style.css"
import React from 'react'

function Services() {
  return (
    <div>
      <div class="services main">
        <div>
          <p>Our Services</p>

          <h1>What We Offer</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available but the
            majority have suffered alteration in some form.
          </p>
          <div class="text-center">
            <div class="row mb-3">
              <div class="col">
                <div class="card text-bg-light">
                  <div class="card-body">
                    <svg
                      width="92"
                      height="92"
                      viewBox="0 0 92 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_121_54010)">
                        <rect
                          x="11"
                          y="7"
                          width="70"
                          height="70"
                          rx="15"
                          fill="#3056D3" />
                      </g>
                      <path
                        d="M48.6663 25.2955C39.137 23.5318 30.0642 29.8469 28.2952 39.348C27.4393 43.9563 28.4664 48.5646 31.0913 52.4333C33.7732 56.302 37.7675 58.8621 42.3325 59.7155C43.4166 59.8862 44.4438 60 45.4709 60C53.7448 60 61.1629 54.0832 62.7036 45.6062C64.4725 36.1051 58.1386 27.0023 48.6663 25.2955ZM60.8205 45.2648C60.7064 45.8337 60.5923 46.4595 60.4211 46.9716L46.555 41.7943V27.0023C47.1257 27.0591 47.7533 27.116 48.324 27.2298C56.7121 28.7659 62.3041 36.8447 60.8205 45.2648ZM44.5008 27.0023V41.453H30.0642C30.1212 40.8841 30.1783 40.2582 30.2924 39.6893C31.5478 32.5777 37.5963 27.4574 44.5008 27.0023ZM42.7319 57.7243C38.6805 56.9847 35.1427 54.709 32.7461 51.2954C31.0913 48.9628 30.1783 46.232 30.0071 43.5011H45.2997L59.6222 48.849C56.8262 55.1641 49.8646 59.0328 42.7319 57.7243Z"
                        fill="white" />
                      <defs>
                        <filter
                          id="filter0_d_121_54010"
                          x="0"
                          y="0"
                          width="92"
                          height="92"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                          <feflood
                            flood-opacity="0"
                            result="BackgroundImageFix" />
                          <fecolormatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                          <feoffset dy="4" />
                          <fegaussianblur stdDeviation="5.5" />
                          <fecolormatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                          <feblend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_121_54010" />
                          <feblend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_121_54010"
                            result="shape" />
                        </filter>
                      </defs>
                    </svg>

                    <h5 class="card-title">Light card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card text-bg-light">
                  <div class="card-body">
                    <svg
                      width="92"
                      height="92"
                      viewBox="0 0 92 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_121_54018)">
                        <rect
                          x="11"
                          y="7"
                          width="70"
                          height="70"
                          rx="15"
                          fill="#3056D3" />
                      </g>
                      <path
                        d="M55.1124 35.2981L55.1125 35.2982L55.1568 35.3405C56.2959 36.428 57.4434 37.5234 59.0611 37.9033C61.1679 38.3988 63.0817 37.955 64.7714 36.6182C64.0885 38.0739 63.1576 39.1881 61.9872 39.9811C60.511 40.9813 58.6101 41.5 56.2502 41.5C53.9127 41.5 52.2336 40.9909 50.9139 40.2765C49.584 39.5567 48.597 38.6182 47.6374 37.7026C47.6374 37.7026 47.6373 37.7025 47.6373 37.7025L47.595 37.662C46.4552 36.5732 45.3073 35.4767 43.6893 35.0967C41.5824 34.6017 39.6685 35.0458 37.9784 36.3829C38.6614 34.9267 39.5924 33.8122 40.7629 33.019C42.2391 32.0187 44.14 31.5 46.5004 31.5C48.8379 31.5 50.5168 32.0089 51.8363 32.7233C53.166 33.4431 54.1529 34.3819 55.1124 35.2981ZM49.3105 48.904L49.3107 48.904C51.4178 49.399 53.3318 48.9549 55.022 47.6175C54.3391 49.0737 53.4081 50.1881 52.2376 50.9812C50.7614 51.9814 48.8605 52.5 46.5004 52.5C44.1625 52.5 42.4834 51.9909 41.1638 51.2766C39.834 50.5567 38.8472 49.6182 37.8876 48.7026C37.8876 48.7026 37.8875 48.7025 37.8875 48.7025L37.8452 48.6621C36.7053 47.5732 35.5574 46.4767 33.9387 46.0967C31.8321 45.6017 29.9182 46.0459 28.2282 47.3832C28.911 45.9269 29.8421 44.8123 31.0126 44.0191C32.4888 43.0187 34.3897 42.5 36.7498 42.5C39.0872 42.5 40.7663 43.0092 42.0861 43.7238C43.416 44.4439 44.4031 45.3826 45.3627 46.2982C45.3627 46.2982 45.3627 46.2982 45.3627 46.2983L45.407 46.3405C46.5461 47.428 47.6936 48.5234 49.3105 48.904Z"
                        stroke="white" />
                      <defs>
                        <filter
                          id="filter0_d_121_54018"
                          x="0"
                          y="0"
                          width="92"
                          height="92"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                          <feflood
                            flood-opacity="0"
                            result="BackgroundImageFix" />
                          <fecolormatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                          <feoffset dy="4" />
                          <fegaussianblur stdDeviation="5.5" />
                          <fecolormatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                          <feblend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_121_54018" />
                          <feblend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_121_54018"
                            result="shape" />
                        </filter>
                      </defs>
                    </svg>

                    <h5 class="card-title">Light card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card text-bg-light">
                  <div class="card-body">
                    
                    <svg
                      width="92"
                      height="92"
                      viewBox="0 0 92 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_121_54060)">
                        <rect
                          x="11"
                          y="7"
                          width="70"
                          height="70"
                          rx="15"
                          fill="#3056D3" />
                      </g>
                      <path
                        d="M45.5 32.875C36.2031 32.875 28.6562 41.0781 28.6562 51.1406C28.6562 51.6875 29.0937 52.125 29.6406 52.125H61.3594C61.9062 52.125 62.3438 51.6875 62.3438 51.1406C62.3438 41.0781 54.7969 32.875 45.5 32.875ZM47.4687 50.2109L45.9922 45.5078C45.8281 45.0156 45.1719 45.0156 45.0078 45.5078L43.5312 50.2109H30.625C31.0625 41.625 37.5703 34.7891 45.5 34.7891C53.4297 34.7891 59.9375 41.625 60.375 50.2109H47.4687Z"
                        fill="white" />
                      <path
                        d="M45.5 38.7812C44.9531 38.7812 44.5156 39.2187 44.5156 39.7656V41.1875C44.5156 41.7344 44.9531 42.1719 45.5 42.1719C46.0469 42.1719 46.4844 41.7344 46.4844 41.1875V39.7656C46.4844 39.2187 46.0469 38.7812 45.5 38.7812Z"
                        fill="white" />
                      <path
                        d="M53.8672 42.8828L52.9922 43.8125C52.6094 44.1953 52.6094 44.7969 52.9922 45.1797C53.1563 45.3438 53.4297 45.4531 53.6484 45.4531C53.9219 45.4531 54.1406 45.3438 54.3594 45.1797L55.2344 44.25C55.6172 43.8672 55.6172 43.2656 55.2344 42.8828C54.8516 42.5 54.25 42.5 53.8672 42.8828Z"
                        fill="white" />
                      <path
                        d="M37.1328 42.8828C36.8047 42.5 36.1484 42.4453 35.7656 42.8281C35.3828 43.1562 35.3281 43.8125 35.7109 44.1953L36.5312 45.125C36.6953 45.3437 36.9687 45.4531 37.2422 45.4531C37.4609 45.4531 37.6797 45.3984 37.8984 45.2344C38.2812 44.9062 38.3359 44.25 37.9531 43.8672L37.1328 42.8828Z"
                        fill="white" />
                      <defs>
                        <filter
                          id="filter0_d_121_54060"
                          x="0"
                          y="0"
                          width="92"
                          height="92"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                          <feflood
                            flood-opacity="0"
                            result="BackgroundImageFix" />
                          <fecolormatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                          <feoffset dy="4" />
                          <fegaussianblur stdDeviation="5.5" />
                          <fecolormatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                          <feblend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_121_54060" />
                          <feblend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_121_54060"
                            result="shape" />
                        </filter>
                      </defs>
                    </svg>
          
                    <p class="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <div class="row mb-3">
              <div class="col">
                <div class="card text-bg-light">
                  <div class="card-body">
                    <svg
                      width="92"
                      height="92"
                      viewBox="0 0 92 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_121_54052)">
                        <rect
                          x="11"
                          y="7"
                          width="70"
                          height="70"
                          rx="15"
                          fill="#3056D3" />
                      </g>
                      <path
                        d="M58.5312 46.656L57.6563 46.1638L58.6953 45.5623C59.7344 44.906 60.3359 43.8123 60.2812 42.6091C60.2266 41.406 59.625 40.3123 58.5312 39.7107L56.8906 38.781L58.6406 37.6873C59.6797 37.031 60.2812 35.9373 60.2266 34.7341C60.1719 33.531 59.5703 32.4373 58.4766 31.8357L48.25 26.0935C47.2109 25.4919 45.9531 25.5466 44.9141 26.0935L34.4141 32.2185C33.375 32.8201 32.7188 33.9138 32.7188 35.1169C32.7188 36.3201 33.375 37.4138 34.4141 38.0154L36.1094 38.9998L34.4141 39.9841C33.375 40.5857 32.7188 41.6794 32.7188 42.8826C32.7188 44.0857 33.3203 45.1794 34.4141 45.781L35.3984 46.3279L34.4687 46.8748C33.4297 47.4763 32.7734 48.5701 32.7734 49.7732C32.7734 50.9763 33.375 52.0701 34.4687 52.6716L44.9141 58.6873C45.4609 59.0154 46.0078 59.1248 46.6094 59.1248C47.2109 59.1248 47.8125 58.9607 48.3594 58.6326L58.6953 52.2888C59.7344 51.6326 60.3359 50.5388 60.2812 49.3357C60.2266 48.2966 59.625 47.2029 58.5312 46.656ZM34.6328 35.1169C34.6328 34.5701 34.9062 34.1326 35.3438 33.8591L45.8438 27.7888C46.0625 27.6794 46.3359 27.5701 46.5547 27.5701C46.7734 27.5701 47.0469 27.6248 47.2656 27.7341L57.5469 33.4763C57.9844 33.7498 58.2578 34.1873 58.3125 34.7341C58.3125 35.281 58.0391 35.7185 57.6016 35.9919L47.3203 42.3904C46.8828 42.6638 46.2812 42.6638 45.8438 42.3904L35.3984 36.3748C34.9062 36.156 34.6328 35.6638 34.6328 35.1169ZM34.6328 42.9373C34.6328 42.3904 34.9062 41.9529 35.3438 41.6794L38.0234 40.1482L44.8594 44.0857C45.4062 44.4138 45.9531 44.5232 46.5547 44.5232C47.1562 44.5232 47.7578 44.3591 48.3047 44.031L55.0312 39.8748L57.6016 41.2966C58.0391 41.5701 58.3125 42.0076 58.3672 42.5544C58.3672 43.1013 58.0938 43.5388 57.6563 43.8123L47.3203 50.2654C46.8828 50.5388 46.2812 50.5388 45.8438 50.2654L35.3984 44.2498C34.9062 43.9763 34.6328 43.4841 34.6328 42.9373ZM57.6563 50.8123L47.3203 57.2107C46.8828 57.4841 46.2812 57.4841 45.8438 57.2107L35.3984 51.1951C34.9609 50.9216 34.6875 50.4841 34.6875 49.9373C34.6875 49.3904 34.9609 48.9529 35.3984 48.6794L37.3125 47.5857L44.8594 51.9607C45.4062 52.2888 45.9531 52.3982 46.5547 52.3982C47.1562 52.3982 47.7578 52.2341 48.3047 51.906L55.7969 47.2576L57.6563 48.2966C58.0938 48.5701 58.3672 49.0076 58.4219 49.5544C58.3672 50.0466 58.0938 50.5388 57.6563 50.8123Z"
                        fill="white" />
                      <defs>
                        <filter
                          id="filter0_d_121_54052"
                          x="0"
                          y="0"
                          width="92"
                          height="92"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                          <feflood
                            flood-opacity="0"
                            result="BackgroundImageFix" />
                          <fecolormatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                          <feoffset dy="4" />
                          <fegaussianblur stdDeviation="5.5" />
                          <fecolormatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                          <feblend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_121_54052" />
                          <feblend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_121_54052"
                            result="shape" />
                        </filter>
                      </defs>
                    </svg>

                    <h5 class="card-title">Light card title</h5>

                    <p class="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card text-bg-light">
                  <div class="card-body">
                    <svg
                      width="92"
                      height="92"
                      viewBox="0 0 92 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_121_54026)">
                        <rect
                          x="11"
                          y="7"
                          width="70"
                          height="70"
                          rx="15"
                          fill="#3056D3" />
                      </g>
                      <path
                        d="M39.7734 39.3281H32.8281C31.0781 39.3281 29.6562 37.9062 29.6562 36.1562V29.2109C29.6562 27.4609 31.0781 26.0391 32.8281 26.0391H39.7734C41.5234 26.0391 42.9453 27.4609 42.9453 29.2109V36.1562C42.9453 37.9062 41.5234 39.3281 39.7734 39.3281ZM32.8281 27.9531C32.1719 27.9531 31.5703 28.5 31.5703 29.2109V36.1562C31.5703 36.8125 32.1172 37.4141 32.8281 37.4141H39.7734C40.4297 37.4141 41.0313 36.8672 41.0313 36.1562V29.2109C41.0313 28.5547 40.4844 27.9531 39.7734 27.9531H32.8281Z"
                        fill="white" />
                      <path
                        d="M60.1719 39.3281H53.2266C51.4766 39.3281 50.0547 37.9062 50.0547 36.1562V29.2109C50.0547 27.4609 51.4766 26.0391 53.2266 26.0391H60.1719C61.9219 26.0391 63.3438 27.4609 63.3438 29.2109V36.1562C63.3438 37.9062 61.9219 39.3281 60.1719 39.3281ZM53.2266 27.9531C52.5703 27.9531 51.9688 28.5 51.9688 29.2109V36.1562C51.9688 36.8125 52.5156 37.4141 53.2266 37.4141H60.1719C60.8281 37.4141 61.4297 36.8672 61.4297 36.1562V29.2109C61.4297 28.5547 60.8828 27.9531 60.1719 27.9531H53.2266Z"
                        fill="white" />
                      <path
                        d="M39.7734 58.9609H32.8281C31.0781 58.9609 29.6562 57.5391 29.6562 55.7891V48.8438C29.6562 47.0938 31.0781 45.6719 32.8281 45.6719H39.7734C41.5234 45.6719 42.9453 47.0938 42.9453 48.8438V55.7891C42.9453 57.5391 41.5234 58.9609 39.7734 58.9609ZM32.8281 47.5859C32.1719 47.5859 31.5703 48.1328 31.5703 48.8438V55.7891C31.5703 56.4453 32.1172 57.0469 32.8281 57.0469H39.7734C40.4297 57.0469 41.0313 56.5 41.0313 55.7891V48.8438C41.0313 48.1875 40.4844 47.5859 39.7734 47.5859H32.8281Z"
                        fill="white" />
                      <path
                        d="M60.1719 58.9609H53.2266C51.4766 58.9609 50.0547 57.5391 50.0547 55.7891V48.8438C50.0547 47.0938 51.4766 45.6719 53.2266 45.6719H60.1719C61.9219 45.6719 63.3438 47.0938 63.3438 48.8438V55.7891C63.3438 57.5391 61.9219 58.9609 60.1719 58.9609ZM53.2266 47.5859C52.5703 47.5859 51.9688 48.1328 51.9688 48.8438V55.7891C51.9688 56.4453 52.5156 57.0469 53.2266 57.0469H60.1719C60.8281 57.0469 61.4297 56.5 61.4297 55.7891V48.8438C61.4297 48.1875 60.8828 47.5859 60.1719 47.5859H53.2266Z"
                        fill="white" />
                      <defs>
                        <filter
                          id="filter0_d_121_54026"
                          x="0"
                          y="0"
                          width="92"
                          height="92"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                          <feflood
                            flood-opacity="0"
                            result="BackgroundImageFix" />
                          <fecolormatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                          <feoffset dy="4" />
                          <fegaussianblur stdDeviation="5.5" />
                          <fecolormatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                          <feblend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_121_54026" />
                          <feblend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_121_54026"
                            result="shape" />
                        </filter>
                      </defs>
                    </svg>
                    <h5 class="card-title">Light card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card text-bg-light">
                  <div class="card-body">
                    <svg
                      width="92"
                      height="92"
                      viewBox="0 0 92 92"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_121_54042)">
                        <rect
                          x="11"
                          y="7"
                          width="70"
                          height="70"
                          rx="15"
                          fill="#3056D3" />
                      </g>
                      <path
                        d="M33.0469 40.5859C33.2109 40.5859 33.375 40.5859 33.4844 40.5313L39.5547 38.3984C40.0469 38.2344 40.3203 37.6875 40.1562 37.1953C39.9922 36.7031 39.4453 36.4297 38.9531 36.5938L35.2891 37.9063C37.0937 32.9297 41.8516 29.5391 47.375 29.5391C53.2266 29.5391 58.3672 33.4219 59.7891 39.0547C59.8984 39.5469 60.4453 39.875 60.9375 39.7656C61.4297 39.6563 61.7578 39.1094 61.6484 38.6172C60.0078 32.1641 54.1016 27.6797 47.375 27.6797C40.8125 27.6797 35.125 31.8906 33.2656 38.0156L31.5703 33.2578C31.4062 32.7656 30.8594 32.4922 30.3672 32.6563C29.875 32.8203 29.6016 33.3672 29.7656 33.8594L31.8437 39.8203C32.0078 40.2578 32.5547 40.5859 33.0469 40.5859Z"
                        fill="white" />
                      <path
                        d="M63.2344 52.2891L60.9922 46.3828C60.8828 46.0547 60.6094 45.7813 60.2812 45.6719C59.9531 45.5625 59.625 45.5078 59.2969 45.6719L53.2812 47.9688C52.7891 48.1328 52.5156 48.7344 52.7344 49.2266C52.8984 49.7188 53.5 49.9922 53.9922 49.7735L57.7109 48.3516C55.6328 52.6719 51.2031 55.5157 46.1719 55.5157C40.6484 55.5157 35.7812 52.0703 34.0859 46.9297C33.8672 46.4375 33.3203 46.1641 32.8281 46.3282C32.3359 46.4922 32.0625 47.0391 32.2266 47.5313C34.1953 53.4375 39.7734 57.4297 46.1172 57.4297C52.1328 57.4297 57.4922 53.875 59.6797 48.461L61.4297 53C61.5937 53.3828 61.9219 53.6016 62.3047 53.6016C62.4141 53.6016 62.5234 53.6016 62.6328 53.5469C63.1797 53.3282 63.4531 52.7813 63.2344 52.2891Z"
                        fill="white" />
                      <defs>
                        <filter
                          id="filter0_d_121_54042"
                          x="0"
                          y="0"
                          width="92"
                          height="92"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB">
                          <feflood
                            flood-opacity="0"
                            result="BackgroundImageFix" />
                          <fecolormatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                          <feoffset dy="4" />
                          <fegaussianblur stdDeviation="5.5" />
                          <fecolormatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                          <feblend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_121_54042" />
                          <feblend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_121_54042"
                            result="shape" />
                        </filter>
                      </defs>
                    </svg>

                    <h5 class="card-title">Light card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and make
                      up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services