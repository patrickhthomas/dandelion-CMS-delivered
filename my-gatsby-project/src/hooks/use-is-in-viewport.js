import React from 'react'
import styled from '@emotion/styled'
import { useIsInViewport } from 'use-is-in-viewport'

export const isItVisible = () => {
  const [isInViewport, targetRef] = useIsInViewport({threshold: 0.01})

  return [isInViewport, targetRef]
}
