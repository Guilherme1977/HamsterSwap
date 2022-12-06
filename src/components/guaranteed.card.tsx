import { FC } from "react";
import styled from "@emotion/styled";

/** @dev Define styled component */
export const StyledGuaranteedCard = styled.div`
  height: 38px;
  padding: 0 16px;
  background: linear-gradient(90deg, #1eb130 0%, #1ea866 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  svg {
    height: 24px;
    width: 24px;
  }
  span {
    margin-left: 8px;
    font-family: semi-poppins-bold;
    font-size: 11px;
    line-height: 12px;
    color: #fff;
    text-transform: uppercase;
  }
`;

export const GuaranteedCard: FC<{ className: string }> = ({ className }) => {
  return (
    <StyledGuaranteedCard className={className}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M14.3733 7.16L13.4667 6.10667C13.2933 5.90667 13.1533 5.53333 13.1533 5.26667V4.13333C13.1533 3.42667 12.5733 2.84666 11.8667 2.84666H10.7333C10.4733 2.84666 10.0933 2.70667 9.89334 2.53333L8.84 1.62667C8.38 1.23333 7.62667 1.23333 7.16 1.62667L6.11334 2.54C5.91334 2.70667 5.53334 2.84666 5.27334 2.84666H4.12C3.41334 2.84666 2.83334 3.42667 2.83334 4.13333V5.27333C2.83334 5.53333 2.69334 5.90667 2.52667 6.10667L1.62667 7.16667C1.24 7.62667 1.24 8.37333 1.62667 8.83333L2.52667 9.89333C2.69334 10.0933 2.83334 10.4667 2.83334 10.7267V11.8667C2.83334 12.5733 3.41334 13.1533 4.12 13.1533H5.27334C5.53334 13.1533 5.91334 13.2933 6.11334 13.4667L7.16667 14.3733C7.62667 14.7667 8.38 14.7667 8.84667 14.3733L9.9 13.4667C10.1 13.2933 10.4733 13.1533 10.74 13.1533H11.8733C12.58 13.1533 13.16 12.5733 13.16 11.8667V10.7333C13.16 10.4733 13.3 10.0933 13.4733 9.89333L14.38 8.84C14.7667 8.38 14.7667 7.62 14.3733 7.16ZM10.7733 6.74L7.55334 9.96C7.46 10.0533 7.33334 10.1067 7.2 10.1067C7.06667 10.1067 6.94 10.0533 6.84667 9.96L5.23334 8.34667C5.04 8.15333 5.04 7.83333 5.23334 7.64C5.42667 7.44666 5.74667 7.44666 5.94 7.64L7.2 8.9L10.0667 6.03333C10.26 5.84 10.58 5.84 10.7733 6.03333C10.9667 6.22667 10.9667 6.54666 10.7733 6.74Z"
          fill="white"
        />
      </svg>
      <span>
        Guaranteed <br /> payment
      </span>
    </StyledGuaranteedCard>
  );
};
