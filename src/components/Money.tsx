import * as React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import Category from './Category'
import {DEFAULT_CATEGORIES} from '../lib/category'
import {useState} from 'react'
import {TRecordType} from '../hooks/useRecordList'
import Button from './Button'

const Header = styled.header`
  padding: 16px;
`

const TypeSection = styled.section`
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AmountSection = styled.section`
  display: flex;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #eee;
  > span {
    font-size: 2.5em;
  }
  > input {
    padding-left: 8px;
    flex-grow: 1;
    border: none;
    outline: none;
    height: 64px;
    font-size: 2em;
    text-align: right;
  }
`

const CategoryList = styled.ul`
  padding: 24px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  list-style: none;
`

const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
`

const CategoryText = styled.span`
  font-size: .8em;
  margin-top: 8px;
  color: ${props => props.theme.$subText};
  word-break: keep-all;
`

const NoteSection = styled.section`
  padding: 0 24px 24px;
`

const Money: React.FC = () => {
  const [type] = useState<TRecordType>('income')

  return (
    <div>
      <Header>
        <Icon name="cancel" size={18}/>
      </Header>
      <TypeSection>
        <div>
          <Button type={type === 'expense' ? 'success' : 'none'}>支出</Button>
          <Button type={type === 'income' ? 'warning': 'none'}>收入</Button>
        </div>
        <Button>
          <span style={{marginRight: 4}}>5月5号</span>
          <Icon name="dropdown" size={8}/>
        </Button>
      </TypeSection>
      <AmountSection>
        <span>￥</span>
        <input type="text"/>
      </AmountSection>
      <CategoryList>
        {
          DEFAULT_CATEGORIES.map((category => (
            <CategoryItem key={category.id}>
              <Category category={category} type="expense" size={18}/>
              <CategoryText>{category.name}</CategoryText>
            </CategoryItem>
          )))
        }
      </CategoryList>
      <NoteSection>
        <a>添加备注</a>
      </NoteSection>
      <div>
        数字面板
      </div>
    </div>
  )
}

export default Money
