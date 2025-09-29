import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 静态资源导入
import arrow from '@/assets/svg/arrow.svg';
import orderIcon from '@/assets/images/order.png';
import frameIcon from '@/assets/images/frame.png';
import driverIcon from '@/assets/images/driver.png';
import mapImage from '@/assets/images/map.png';
import phoneIcon from '@/assets/images/phone.png';
import tickIcon from '@/assets/svg/down.svg'; // The green tick
import dotsIcon from '@/assets/svg/dots.svg';
import line from '@/assets/svg/line.svg';

import './index.less';

// 定义每个步骤的数据结构
interface Step {
  title: string;
  subtitle?: string;
  icon: string;
  isMap?: boolean;
}

// 步骤数据
const steps: Step[] = [
  { title: 'Order taken', icon: orderIcon },
  { title: 'Order is being processed', icon: frameIcon },
  { title: 'Order is being delivered', subtitle: 'Your meal is on it\'s way!', icon: driverIcon },
  { title: 'Map View', icon: mapImage, isMap: true },
  { title: 'Order Received', icon: tickIcon },
];

const DeliveryStatus: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0); // 从第一步开始 (index 0)

  useEffect(() => {
    // 设置一个定时器来模拟流程
    const interval = setInterval(() => {
      setCurrentStep(prevStep => {
        if (prevStep < steps.length) { // 当所有步骤都完成后，currentStep 会是 steps.length
          return prevStep + 1;
        }
        clearInterval(interval); // 所有步骤完成后清除定时器
        return prevStep;
      });
    }, 2000); // 每2秒更新一个步骤

    // 组件卸载时清除定时器
    return () => clearInterval(interval);
  }, []);

  const getStatusClass = (stepIndex: number): string => {
    if (stepIndex < currentStep) return 'completed';
    if (stepIndex === currentStep) return 'in-progress';
    return 'future';
  };

  return (
    <div className="delivery-status-container">
      <div className="header">
        <div className="go-back" onClick={() => navigate(-1)}>
          <img src={arrow} alt="Go back" />
          <span>Go back</span>
        </div>
        <h1 className="title">Delivery Status</h1>
      </div>

      <div className="status-body">
        {steps.map((step, index) => {
          const status = getStatusClass(index);

          // 地图的特殊渲染
          if (step.isMap) {
            return (
              <React.Fragment key={index}>
                {index > 0 && <img src={line} alt="line" className="line-connector" />}
                <div className={`map-image-container ${status}`}>
                  <img src={step.icon} alt="Map" className="map-image" />
                </div>
              </React.Fragment>
            );
          }

          // 普通步骤的渲染
          return (
            <React.Fragment key={index}>
              {index > 0 && <img src={line} alt="line" className="line-connector" />}
              <div className={`status-item ${status}`}>
                <div className="icon-wrapper">
                  <img src={step.icon} alt={step.title} className="icon" />
                </div>
                <div className="info">
                  <p>{step.title}</p>
                  {step.subtitle && <span>{step.subtitle}</span>}
                </div>
                
                {/* 根据状态显示不同的右侧图标 */}
                {status === 'completed' && <img src={tickIcon} alt="Completed" className="status-icon tick" />}
                {status === 'in-progress' && step.title === 'Order is being delivered' && <img src={phoneIcon} alt="Contact" className="status-icon contact" />}
                {status === 'future' && <img src={dotsIcon} alt="Pending" className="status-icon dots" />}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default DeliveryStatus;
