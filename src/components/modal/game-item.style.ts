import styled from "@emotion/styled"

export const ModalStyle = styled.div`
  .flickity-enabled {
    position: relative;
  }

  .flickity-enabled:focus {
    outline: none;
  }

  .flickity-viewport {
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  .flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(0%);
  }

  /* draggable */

  .flickity-enabled.is-draggable {
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .flickity-enabled.is-draggable .flickity-viewport {
    cursor: move;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  /* ---- flickity-button ---- */

  .flickity-button {
    position: absolute;
    border: none;
    color: #333;
    cursor: pointer;
  }

  .flickity-button:focus {
    outline: none;
    box-shadow: 0 0 0 5px #19f;
  }

  .flickity-button:active {
    opacity: 0.6;
  }

  .flickity-button:disabled {
    opacity: 0.3;
    cursor: auto;
    /* prevent disabled button from capturing pointer up event. #716 */
    pointer-events: none;
  }

  .flickity-button-icon {
    fill: #735CF7;
  }

  /* ---- previous/next buttons ---- */

  .flickity-prev-next-button {
    top: 50%;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    /* vertically center */
    transform: translateY(-50%);
  }

  .flickity-prev-next-button.previous {
    left: -40px;
  }
  .flickity-prev-next-button.next {
    right: -40px;
  }
  /* right to left */
  .flickity-rtl .flickity-prev-next-button.previous {
    left: auto;
    right: 10px;
  }
  .flickity-rtl .flickity-prev-next-button.next {
    right: auto;
    left: 10px;
  }

  .flickity-prev-next-button .flickity-button-icon {
    position: absolute;
    left: 20%;
    top: 20%;
    width: 60%;
    height: 80%;
  }

  /* ---- page dots ---- */

  .flickity-page-dots {
    position: absolute;
    width: 100%;
    bottom: -25px;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    line-height: 1;
  }

  .flickity-rtl .flickity-page-dots {
    direction: rtl;
  }

  .flickity-page-dots .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    transition: width 0.2s linear;
    margin: 0 4px;
    background: #735CF7;
    border-radius: 20px;
    opacity: 0.25;
    cursor: pointer;
  }

  .flickity-page-dots .dot.is-selected {
    opacity: 1;
    width: 20px;
  }
`