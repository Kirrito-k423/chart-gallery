'''
Descripttion: 
version: 
Author: Shaojie Tan
Date: 2022-08-12 23:24:54
LastEditors: Shaojie Tan
LastEditTime: 2022-08-13 11:02:43
'''
from cProfile import label
import matplotlib.pyplot as plt

from matplotlib import rcParams

# 字体 中文用宋体，英文用新罗马
config = {
    "font.family":'Times New Roman',
    # "font.size": 10,
    "mathtext.fontset":'stix',
    "font.serif": ['stix'],
}
rcParams.update(config)

# mpl.rcParams['font.family'] = ['serif']
# mpl.rcParams['font.serif'] = ['Times New Roman']

# 柱形的宽度
width = 0.4
YMIN = 1
YMAX = 40000
plt.title("case1 log Speed-up ratio",fontfamily="Times New Roman")
plt.xticks(fontfamily="Times New Roman")

y_1 = [24478, 8430,   3820.,    57,    9, 6]
y_2 = [0   , 0,       0,        10,     40, 35]
x = ["O3 + cutHalf", "avx2", "unroll", "OpenMP","MPI","MixPrecision"]
plt.bar(x, y_1,width=width,label="Computation")
plt.bar(x, y_2, bottom = y_1,width=width,label="Communication")
BaseTime=y_1[0]+y_2[0]
for xx, yy1, yy2 in zip(x,y_1,y_2):
    yy=yy1+yy2
    print("xx yy {} {}".format(xx,yy))
    plt.text(xx, min(YMAX,yy*1.05), str(format(BaseTime/yy,'.1f'))+"X", ha='center')
plt.legend(loc="upper right")
plt.yscale('log')
plt.ylim([YMIN, YMAX])
plt.show()
plt.savefig("paperAcc.png")