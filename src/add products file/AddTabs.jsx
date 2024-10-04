
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AddData from './AddData';


const AddTabs = () => {




    return (
        <div className=' bg-white p-10  rounded-xl mt-10 mb-10 ml-5 mr-5 '>

            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
              <TabList>
                <Tab> Products 1 </Tab>
                <Tab> Products 2 </Tab>
                <Tab> Products 3 </Tab>
                <Tab> Products 4 </Tab>
              </TabList>
              <TabPanel>
              <AddData></AddData>
              </TabPanel>
              <TabPanel>
              <AddData></AddData>
              </TabPanel>
              <TabPanel>
              <AddData></AddData>
              </TabPanel>
              <TabPanel>
              <AddData></AddData>
              </TabPanel>
            </Tabs>

            
        </div>
    );
};

export default AddTabs;