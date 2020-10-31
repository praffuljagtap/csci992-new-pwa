import React from 'react'
import './App.css'
import routes from './routes'


import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { a11yProps } from './components/extra'
import TabPanelProps from './interfaces/tabPanelProps'
import Overview from './pages/overview'
import SearchByText from './pages/searchByText'
import SearchByLetter from './pages/searchByLetter'
import SearchByImage from './pages/searchByImage'
import SearchByName from './pages/searchByName'


const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    tabs: {
      paddingLeft: 10,
      paddingRight: 10,
      [theme.breakpoints.down('sm')]: {
        fontSize: 11
      }
    }
  })
)

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  )
}

const App: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          scrollButtons="auto"
          aria-label="scrollable auto tabs"
        >
          {routes.map(route => {
            return <Tab className={classes.tabs} key={route.key} label={route.name} {...a11yProps(route.key)} />
          })}
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0}>
          <Overview />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SearchByText />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SearchByLetter />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <SearchByImage />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <SearchByName />
        </TabPanel>
    </div>
  )
}

export default App
