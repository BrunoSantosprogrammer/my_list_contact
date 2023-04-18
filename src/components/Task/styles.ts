import styled from 'styled-components'

export const Card = styled.div`
  background-color: #e6e6fa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`
export const Name = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Tag = styled.span`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: #ff8c00;
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`
export const Notes = styled.textarea`
  color: #afeeee;
  font-size: 14px;
  line-height: 24px;
  resize: none;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
`
export const NotesActions = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const BtnCard = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
