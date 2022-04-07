import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.div`
  padding-left: 10px;
  font-size: 0.875em;
  color: rgba(128, 128, 128, 0.8)
`;

export const ModalProductName = styled.th`
  font-weight: 700;
  font-size: 1em;
  padding-bottom: 10px;
  border-bottom: 3px solid rgba(3, 115, 83, 0.3);
  width: 150px;
  position: sticky;
`;

export const ModalContent = styled.div`
  width: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  /* box-shadow: -1px 3px 35px 15px rgba(11, 191, 125, .6) */
`;

export const ModalBody = styled.div`
  padding: 10px;
  overflow-y: auto;
`;

export const TableRow = styled.tr`
  border: 1px solid red;
  height: 40px;
  text-align: left;
  color: rgba(128, 128, 128, 0.8);
`;

export const TableRowFeature = styled.td`
  text-align: center;
  color: rgb(50, 78, 89);
`;
