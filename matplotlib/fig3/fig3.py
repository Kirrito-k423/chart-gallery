'''
Descripttion: 
version: 
Author: Shaojie Tan
Date: 2022-08-12 23:24:54
LastEditors: Shaojie Tan
LastEditTime: 2022-08-13 11:02:43
'''
from cProfile import label
from dis import Instruction
from sre_constants import IN
import matplotlib.pyplot as plt
import numpy as np

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
YMIN = 0
YMAX = 7
# plt.title("unroll Times Acc",fontfamily="Times New Roman")
# plt.xticks(fontfamily="Times New Roman")    
fig = plt.figure()
ax1 = fig.add_subplot(111)
ax1.set_xlabel('unroll Times')
ax1.set_ylabel('cycles')
ax1.set_title("unroll Times Acc",fontfamily="Times New Roman")
# plt.ylabel ('cycles')
# plt.xlabel ('unroll Times')

InstructionInfo =  {'add_ps': [4, 0.5],\
                    'vcvtps2pd': [7,1],
                    'extractf128_ps': [3,1], 
                    'loadu_ps':[7,0.5],
                    'max_ps':[4,0.5],
                    'and_ps':[1,0.3],
                    'sub_ps':[4,0.5]
                    }# [latency, Throughput (CPI)]

InstructionList = {
                    'vcvtps2pd':1,
                    'extractf128_ps':1,
                    'loadu_ps':5,
                    "max_ps":4,
                    'and_ps':4,
                    'sub_ps':4,
                    'add_ps':5
                    }# InstructionNumbers

unrollNumbers= 16

x=[]
avgCyclesTotal=[]
for i in range(unrollNumbers):
    x.append(str(i+1))
    avgCyclesTotal.append(0)

legendBarList= []
legendBarNameList = []
for InstructionKeyName in InstructionList:
    tmp_y=[]
    for unrollTimes in range(1,unrollNumbers+1):
        # print("Unrolling Times: " + str(unrollTimes))
        Latency = InstructionInfo[InstructionKeyName][0]
        Throughput = InstructionInfo[InstructionKeyName][1]
        InstNum = InstructionList[InstructionKeyName]
        avgCyclesPerInst = (Latency + InstNum*Throughput*unrollTimes)*1.0/unrollTimes
        tmp_y.append(avgCyclesPerInst)
    legendBarList.append(ax1.bar(x, tmp_y,width=width,label=InstructionKeyName,bottom=avgCyclesTotal))
    legendBarNameList.append(InstructionKeyName)
    avgCyclesTotal=np.sum([avgCyclesTotal,tmp_y],axis=0).tolist()

print("ax1 label: " + ax1.get_label())
ax1.legend(legendBarList,legendBarNameList,loc="upper right")
# fig.legend(loc=1)
stepAcc=[]
beforeTime=avgCyclesTotal[0]
for unrollTimes in range(0,unrollNumbers):
    stepAcc.append(beforeTime/avgCyclesTotal[unrollTimes])
    beforeTime = avgCyclesTotal[unrollTimes]


ax2 = ax1.twinx()  # this is the important function
ax2.plot(x, stepAcc, 'r')
ax2.set_ylabel('stepAcc')


BaseTime=avgCyclesTotal[0]
for xx, yy in zip(x,avgCyclesTotal):
    print("xx yy {} {}".format(xx,yy))
    ax1.text(xx, yy+0.05, str(format(BaseTime/yy,'.1f'))+"X", ha='center')

skipFirst=True
for xx, yy in zip(x,stepAcc):
    if skipFirst:
        skipFirst=False
        continue
    print("xx yy {} {}".format(xx,yy))
    ax2.text(xx, yy+0.01, str(format(yy,'.2f'))+"X", ha='center')


plt.show()
plt.savefig("unrollAcc.png")