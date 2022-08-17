from flask import Flask, render_template
from .config import Configuration
from flask_socketio import SocketIO, send


app = Flask(__name__)
app.config.from_object(Configuration)
socketio = SocketIO(app, cors_allowed_origins='*')
socketio.init_app(app)

# @socketio.on('message')
# def handle_message(msg):
#     print('Message: ' + msg)
#     if msg != 'User connected!':
#         send(msg, broadcast=True)

# @app.route('/')
# def index():
#     return render_template('index.html')
app.host = 'localhost'

@socketio.on('message')
def handle_message(msg):
    print(msg)
    send(msg, broadcast=True)
    return None


if __name__ == '__main__':
    socketio.run(app)
