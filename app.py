from flask_cors import CORS
# TextBlob(sentence).sentiment
import keras
from flask import Flask, jsonify, request
app = Flask(__name__)
CORS(app)

@app.route('/OSP', methods=['POST'])
def predict_sentiment():
    data = request.get_json()
    
    model = keras.models.load_model('best_nn_model_13r2_62mae_22mape.h5')
    X_test = [data['wake'],data['naps'],data['nm'],data['age'],data['weight'],data['i'],data['h'],data['c'],data['ac'],data['s'],data['ns']]
    print(X_test)
    #y_pred = model.predict(X_test)
    return jsonify({"test":"test"})

@app.route('/', methods=['GET'])
def hello():
    return jsonify({"response":"This is Optimal Sleep Predictor Application"})

if __name__ == '__main__':
    app.run(host="0.0.0.0", threaded=True, port=5000)