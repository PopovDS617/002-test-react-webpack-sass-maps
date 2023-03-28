import React from 'react';
import { PickpointItem } from './PickpointItem/PickpointItem';

import { TPickpointListWithID } from '@src/models/Pickpoint';
import { motion } from 'framer-motion';

import './PickpointList.scss';

type PickpointListProps = {
  loading: boolean;
  error: boolean;
  list: TPickpointListWithID;
};

export const PickpointList = (props: PickpointListProps) => {
  const animationVariants = {
    hidden: { opacity: 0, x: 0, y: -20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
  };

  const { loading, error, list } = props;

  return (
    <div className="pickpoint-list">
      <ul>
        {list?.pickPoints &&
          !loading &&
          list.pickPoints.map((item, index) => {
            const count = 0.3;

            return (
              <motion.li
                key={item.id}
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={animationVariants}
                transition={{ duration: count * index, type: 'ease' }}
              >
                <PickpointItem itemData={item} />
              </motion.li>
            );
          })}
      </ul>
    </div>
  );
};
