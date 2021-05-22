import React from 'react'
import { Box, Flex, Text, FrenchKissToggle, useMatchBreakpoints } from '@frenchkiss-libs/uikit'
import { useAudioModeManager } from 'state/user/hooks'

const AudioSetting = () => {
  const { isSm, isXs } = useMatchBreakpoints()
  const [audioPlay, toggleSetAudioMode] = useAudioModeManager()

  return (
    <Box mb="16px">
      <Flex alignItems="center" mb="8px">
        <Text bold>Audio</Text>
      </Flex>
      <Box>
        <FrenchKissToggle scale={isSm || isXs ? 'sm' : 'md'} checked={audioPlay} onChange={toggleSetAudioMode} />
      </Box>
    </Box>
  )
}

export default AudioSetting
