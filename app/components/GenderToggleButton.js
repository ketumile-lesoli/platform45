import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconMale from '../../images/mars-symbol.svg';
import IconFemale from '../../images/venus-symbol.svg';


export default function GenderToggleButton() {
  const [gender, setGender] = React.useState('left');

  const handleGender = (event, newGender) => {
    if (newGender !== null) {
      setGender(newGender);
    }
  };

  return (
    <Stack direction="row" spacing={10}>
      <ToggleButtonGroup
        value={gender}
        exclusive
        onChange={handleGender}
        aria-label="text alignment"
        sx={{border:'none', borderRadius: '50%', padding:'15px', display: 'flex', alignItems: 'center' }}
      >
        <ToggleButton id="male" value="left" aria-label="left aligned" sx={{border:'none', borderRadius: '50% !important', padding:'15px', display: 'flex', alignItems: 'center' }}>
          <img src={IconMale}  alt=""  width={25} height={25}/>
        </ToggleButton><label for="male">Male</label>
        <ToggleButton id="female" value="center" aria-label="centered"sx={{border:'none', borderRadius: '50% !important', padding:'15px', display: 'flex', alignItems: 'center' }}>
        <img src={IconFemale} alt="" width={25} height={25}/>
        </ToggleButton><label for="female">Female</label>
      </ToggleButtonGroup>
      </Stack>
  );
}
