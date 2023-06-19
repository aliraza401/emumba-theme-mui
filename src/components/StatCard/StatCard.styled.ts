import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  height: 142px;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.bg.light};
  border-radius: 10px;
  margin-bottom: 40px;
`;

export const IconContainer = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ color }) => `${color}80`};
`;

export const Icon = styled.img`
  width: 27px;
  height: 27px;
  background-color: ${({ color }) => color};
`;

export const ContentContainer = styled.div`
  flex: 1;
  margin-left: 0.875rem;
`;

export const Name = styled.div`
  font-weight: 500;
  line-height: 1;
  font-size: 1.375rem;
  margin-bottom: 10px;
`;

export const TagLine = styled.div`
  font-size: 0.875rem;
  color: #888888;
  margin-bottom: 20px;
`;

export const ProgressContainer = styled.div`
  margin-top: 5px;
  border-radius: 0.5rem;
  background-color: ${({ color }) => `${color}80`};
`;

export const ProgressFill = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 6px;
  background-color: #3f8ae0;
  border-radius: 3px;
  background-color: ${({ color }) => color};
`;
