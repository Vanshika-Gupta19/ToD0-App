import React from 'react';
import { useStyletron } from "baseui";
import { useState } from 'react';
import {Card} from 'baseui/card';
import { StyledBody } from 'baseui/card';
import { Input } from "baseui/input";
import { Block } from "baseui/block";
import { Button } from "baseui/button";
import {List, arrayMove, arrayRemove} from "baseui/dnd-list"

function App() { 
  const [css, theme] = useStyletron();
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const addItems = ()=>{
    if(inputValue.trim() !== ''){
      setItems([...items , inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <Card 
      className={css({
        border: "2px solid black",
        backgroundColor: "pink",
        // background: theme.colors.backgroundLightPositive,
        // border: theme.borders.border600
      })}
      >
      <StyledBody>
      <Block display={'flex'} alignItems={'center'} marginBottom={'20px'}>
    <Input
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      placeholder="Enter Task"
      clearOnEscape
      overrides={{
        Root: {
          style: ({ $theme }) => ({ 
            backgroundColor: $theme.colors.warning200,
            width: '500px', 
            marginRight: '50px'
          })
        },
        InputContainer: {
            style: ({ $theme }) => ({
              outline: `${$theme.colors.warning200} solid`,
              backgroundColor: $theme.colors.warning200
            })
        },
      }}
    />
    <Button onClick={addItems}>Add Task</Button>
    </Block>
<List
      items={items}
      removable
      onChange={({ oldIndex, newIndex }) =>
        setItems(
          newIndex === -1
            ? arrayRemove(items, oldIndex)
            : arrayMove(items, oldIndex, newIndex)
        )
      }
      overrides={{
        Label: {
          style: ({ $theme }) => ({
            color: $theme.colors.negative600
          })
        }
      }}
    />

    </StyledBody>
      </Card>
    </div>
  );
}

export default App;
