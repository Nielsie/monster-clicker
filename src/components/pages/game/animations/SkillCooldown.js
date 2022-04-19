import React, {useEffect, useRef} from "react";

export const SkillCooldown = props => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!props.isCooldown)
            return;

        const canvas = canvasRef?.current;
        const ctx = canvas?.getContext('2d');

        if (!canvas || !ctx)
            return;

        if (props.percentage >= 1.0) {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        } else {
            const degrees = 360 * props.percentage;

            const hypoteneuse = Math.sqrt(Math.pow(props.width, 2) + Math.pow(props.height, 2));
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            canvas.height = hypoteneuse;
            canvas.width = hypoteneuse;

            canvas.style.marginLeft = -hypoteneuse / 2 + "px";
            canvas.style.marginTop = -hypoteneuse / 2 + "px";

            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';

            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate(-Math.PI / 2);

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo((hypoteneuse / 2) * Math.cos(0).toFixed(15), (hypoteneuse / 2) * Math.sin(0).toFixed(15));
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';

            ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
            ctx.shadowBlur = 10;

            ctx.stroke();
            ctx.moveTo(0, 0);
            ctx.lineTo((hypoteneuse / 2) * Math.cos(degrees * Math.PI / 180).toFixed(15), (hypoteneuse / 2) * Math.sin(degrees * Math.PI / 180).toFixed(15));
            ctx.stroke();

            ctx.shadowColor = null;
            ctx.shadowBlur = null;

            ctx.arc(0, 0, hypoteneuse / 2, degrees * Math.PI / 180, Math.PI * 2, false);
            ctx.fill();
            ctx.closePath();
        }
    }, [props.percentage, props.isCooldown, props.width, props.height]);

    return (
        <canvas ref={canvasRef} style={{position: 'absolute', left: '50%', top: '50%'}}/>
    )
};