/* @flow */
import styled from 'styled-components';
import rgba from 'hex-rgba';
import { spacing, colors, misc, shadows, fontSize, fontWeight, lineHeight } from '../constants';

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${spacing.normal};
`;

Cards.Card = styled.div`
  display: flex;
  align-items: center;
  background-color: ${rgba(colors.white, 80)};
  background: linear-gradient(
    45deg,
    ${rgba(colors.white, 900)},
    ${rgba(colors.white, 70)} 60%,
    ${rgba(colors.white, 50)}
  );
  border-radius: ${misc.borderRadius};
  padding: ${spacing.small} ${spacing.larger} ${spacing.normal} 0;
`;
Cards.Card.Icon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: ${colors.yellow};
  background: linear-gradient(45deg, ${colors.yellowLight}, ${colors.yellow});
  margin-left: -14px;
  box-shadow: ${shadows.light};
`;
Cards.Card.Content = styled.div`
  color: ${colors.black};
  padding-left: ${spacing.normal};
`;
Cards.Card.Content.Title = styled.div`
  font-size: ${fontSize.heading2};
  font-weight: ${fontWeight.bold};
  line-height: ${lineHeight.small};
`;
Cards.Card.Content.Label = styled.div`
  color: ${rgba(colors.black, 50)};
  font-size: ${fontSize.smaller};
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  line-height: ${lineHeight.smaller};
`;

export default Cards;
