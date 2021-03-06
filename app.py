from flask_cors import CORS
# TextBlob(sentence).sentiment
import keras
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from flask import Flask, jsonify, request
app = Flask(__name__)
CORS(app)
y = pd.read_csv('C:/Users/tanma/Documents/GitHub/OSP/2woutputs.csv')
scaler_y = MinMaxScaler(feature_range = (0,1))
output_scaler = scaler_y.fit(y['sleep_min'].values.reshape(1,-1))

@app.route('/OSP', methods=['POST'])
def predict_sentiment():
    data = request.get_json()
    
    
    data1 = np.load('C:/Users/tanma/Documents/GitHub/OSP/X_test_scaled.npy')
    model = keras.models.load_model('best_nn_model_13r2_62mae_22mape.h5')
    X_test = [data['wake']][0]
    X = (int(X_test[0])*10)+(int(X_test[1])) + (int(X_test[2])*10+int(X_test[3]))/60
    y_pred = model.predict(data1)
    y_pred  = (scaler_y.inverse_transform(y_pred.reshape(1,-1))[0][-1])/60
    y_final = (X-y_pred)
    if (y_final < 0):
        y_final = 12 + y_final
    y_final = round(y_final,2)
    if (str(y_final).find(".")):
        hr = int(str(y_final).split('.')[0])
        min = int(str(y_final).split('.')[1])
        if (min>59):
            min = min-59
            hr = hr + 1
    ans = str(hr) + ":" + str(min)
    time1 = "PM"
    if hr < 6:
        time1 = "AM"
    else:
        time1 = "PM"
    print(X_test,y_pred ,time1 )
    return jsonify({"wake":X_test,"pred": ans, "time1" : time1 })

@app.route('/', methods=['GET'])
def hello():
    return jsonify({"response":"This is Optimal Sleep Predictor Application"})

if __name__ == '__main__':
    app.run(host="0.0.0.0", threaded=True, port=5000)