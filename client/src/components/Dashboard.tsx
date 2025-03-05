import FinancialRecordForm from './FinancialRecordForm'
import { useUser } from '@clerk/clerk-react'
import { TransactionCategories } from '../lib/data'
import FinancialRecordList from './FinancialRecordList'

const Dashboard = () => {
  const { isSignedIn, user, isLoaded} = useUser()
  
  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (!isSignedIn) {
    return <div>Sign in to view this page.</div>
  }

  return (
    <div>
        <h1>
          Hello {user.firstName}! 
          <br />
          Here are your finances.
        </h1>
        <FinancialRecordForm categoryList={TransactionCategories}/>
        <FinancialRecordList/>
    </div>
  )
}

export default Dashboard