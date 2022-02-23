import { Colors } from "constants/Colors";
import { getTypographyByKey } from "constants/DefaultTheme";
import styled from "styled-components";
import { TemplateLayout } from "./index";

const LargeTemplate = styled(TemplateLayout)`
  border: 1px solid ${Colors.GEYSER_LIGHT};
  flex: 1;
  max-width: 50%;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
      0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  }

  && {
    .title {
      ${(props) => getTypographyByKey(props, "h1")}
    }
    .categories {
      ${(props) => getTypographyByKey(props, "h4")}
      font-weight: normal;
    }
    .description {
      ${(props) => getTypographyByKey(props, "p1")}
    }
  }

  .image-wrapper {
    padding: ${(props) =>
      `${props.theme.spaces[9]}px ${props.theme.spaces[11]}px ${props.theme.spaces[0]}px`};
    transition: all 1s ease-out;
    width: 100%;
    min-height: 250px;
  }

  .fork-button {
    height: 36px;
    width: 36px;

    svg {
      height: 17px;
      width: 17px;
    }
  }
`;

export default LargeTemplate;