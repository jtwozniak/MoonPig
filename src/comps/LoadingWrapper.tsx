import * as React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

type Props = {
  condition: boolean
  children?: React.ReactElement<any>
}

export const LoadingWrapper: React.FunctionComponent<Props> = ({
  condition,
  children,
}: Props) =>
  condition ? <>{children}</> : <CircularProgress color="inherit" />
