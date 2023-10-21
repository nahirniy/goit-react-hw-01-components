import styled from 'styled-components';

export const FriendItem = styled.li`
  background-color: white;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: flex;
  padding: 10px 0;
  align-items: center;
  gap: 8px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
  margin-left: 10px;
`;

export const Avatar = styled.img`
  border-radius: 4px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
