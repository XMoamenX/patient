import React from 'react';

interface LogoProps {
    logoOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({logoOnly=false}:LogoProps) => {
    return (
        <div>
            <div className='text-black dark:text-slate-300 font-bold flex justify-center items-center'>
                <span className="text-blue-700 font-bold text-xl">O</span>
                {!logoOnly&&
                    <span>RBIT</span>
                }
            </div>
        </div>
    );
};

export default Logo;