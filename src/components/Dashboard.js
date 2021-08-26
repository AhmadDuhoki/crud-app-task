import React, { Component } from 'react';
import { Layout, Progress, Calendar, Badge } from 'antd';

const { Content } = Layout;

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className='events'>
      {listData.map((item) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className='notes-month'>
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

export class Dashboard extends Component {
  render() {
    return (
      <Content
        className='site-layout-background'
        style={{
          padding: 24,
          margin: 0,
          minHeight: 777,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <div className='info_card' style={{ width: '30%' }}>
            <Progress percent={30} />
            <Progress percent={50} status='active' />
            <Progress percent={70} status='exception' />
            <Progress percent={100} />
            <Progress percent={50} />
          </div>
          <div className='info_card'>
            <Progress type='circle' percent={75} />
            <Progress type='circle' percent={70} status='exception' />
            <Progress type='circle' percent={100} />
          </div>
          <div className='info_card'>
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={99.9}
            />
            <Progress
              strokeColor={{
                from: '#108ee9',
                to: '#87d068',
              }}
              percent={99.9}
              status='active'
            />
            <Progress
              type='circle'
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={90}
            />
            <Progress
              type='circle'
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={100}
            />
          </div>
        </div>
        <div
          className='info_card'
          style={{
            marginTop: '30px',
          }}
        >
          <Calendar
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
          />
        </div>
      </Content>
    );
  }
}

export default Dashboard;
