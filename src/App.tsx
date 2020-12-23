import React from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective,
         Inject, Page, TreeGrid } from '@syncfusion/ej2-react-treegrid';
import { summaryData } from './datasource';
import './App.css';

function App() { 
  let treegrid: TreeGrid | null;
  function btnClick(){
    if(treegrid){
      treegrid.selectRows([0, 2, 3]);
      // Uncomment below code to clear selection
      //treegrid.clearSelection();
    }
  }
  return (
    <div>
      <button className="e-btn" onClick={btnClick}>API</button>
      <TreeGridComponent ref={tg => treegrid = tg}
                         dataSource={summaryData}
                         childMapping="subtasks"
                         treeColumnIndex={1}
                         allowPaging={true}
                         selectedRowIndex={3}
                         selectionSettings={{ type:"Multiple",
                                            // enableToggle: false,
                                            // mode:"Both",
                                            // checkboxMode:"ResetOnRowClick",
                                            // persistSelection: true
                                            }}>
        <Inject services={[Page]} />                   
        <ColumnsDirective>
          <ColumnDirective type="checkbox" width="90"></ColumnDirective>
          <ColumnDirective field="taskID" headerText="Task ID" 
          width='90' textAlign="Right" isPrimaryKey={true}>
          </ColumnDirective>
          <ColumnDirective field="taskName" headerText="Task Name">
          </ColumnDirective>
          <ColumnDirective field="startDate" headerText="Start Date" 
          format='yMd'>
          </ColumnDirective>
          <ColumnDirective field="duration" headerText="Duration">
          </ColumnDirective>
          <ColumnDirective field="priority" headerText="Priority">
          </ColumnDirective>
          <ColumnDirective field="approved" headerText="Approved">
          </ColumnDirective>
        </ColumnsDirective>
      </TreeGridComponent>
    </div>
  );
}

export default App;
