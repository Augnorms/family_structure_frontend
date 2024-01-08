interface RoundProps{
    progressFigure:number,
    centerLabel:number
}

export const RoundedProgressBar = (props:RoundProps) => {
  return (
    <div className="flex justify-center items-center">
              <div className="
                w-28 h-28 
                rounded-full flex justify-center 
                items-center shadow-md
                "
                style={{
                  background:`conic-gradient(dodgerblue 0deg, white ${props.progressFigure}deg)`
                }}
              >
                <div className="w-24 h-24 rounded-full flex justify-center items-center bg-slate-50">
                  <div className="w-20 h-20 rounded-full bg-slate-50 flex justify-center items-center font-bold">
                     {props.centerLabel}
                  </div>
                </div>
              </div>
            </div>
  )
}
