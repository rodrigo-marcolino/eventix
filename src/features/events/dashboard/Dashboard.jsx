import React from 'react'
import { Grid } from '@mantine/core'

export default function Dashboard() {
  return (
    <Grid>
      <Grid.Col span={4}>Left</Grid.Col>
      <Grid.Col span={4}>Right</Grid.Col>
    </Grid>
  )
}
