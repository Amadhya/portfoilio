import React from 'react';

import { HomeOutlined } from '@ant-design/icons';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const Error404 = () => (
    <div>
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Link to="/">
                    <Button icon={<HomeOutlined />} type="primary">
                        Back Home
                    </Button>
                </Link>
            }
        />
    </div>
);

export default Error404;
