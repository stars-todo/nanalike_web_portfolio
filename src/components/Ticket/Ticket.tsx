import React, { useEffect, useRef } from 'react';

interface CanvasImageProps {
  src: string;
}

const Ticket: React.FC<CanvasImageProps> = ({ src }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    const image = new Image();
    image.src = src;

    const getEnMonth = (monthNumber: number) => {
      const Month = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ];
      return Month[monthNumber];
    };

    const date = new Date();
    const dateWithMonth = `${getEnMonth(date.getMonth())} ${date.getDate()},`;
    const dateYear = `${date.getFullYear()}`;

    image.onload = () => {
      if (canvas && context) {
        // context.drawImage(image, 0, 0, 800, 342);
        // context.font = '400 29px Montserrat';
        // context.fillStyle = '#CBB9A7';
        // context.fillText(dateWithMonth, 48, 250);
        // context.fillText(dateYear, 48, 288);
        // context.font = '400 20px Montserrat';
        // context.fillStyle = '#E3E1DF';
        // context.fillText(dateWithMonth + ' ' + dateYear, 631, 190);

        context.drawImage(image, 0, 0, 700, 300);
        context.font = '400 26px Montserrat';
        context.fillStyle = '#CBB9A7';
        context.fillText(dateWithMonth, 44, 220);
        context.fillText(dateYear, 44, 254);
        context.font = '400 18px Montserrat';
        context.fillStyle = '#E3E1DF';
        context.fillText(dateWithMonth + ' ' + dateYear, 550, 164);
      }
    };
  }, [src]);

  return (
    <canvas ref={canvasRef} width="700" height="300">
      <img src={src} />
    </canvas>
  );
};

export default Ticket;
