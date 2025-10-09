// 品牌 11: 產品評價管理（對應 brand-10）
document.getElementById("brand-10").innerHTML = `
<div class="phone-container">
  <div class="status-bar">
    <div class="status-time">9:41</div>
    <div class="status-icons">
      <i class="fas fa-signal"></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-battery-full"></i>
    </div>
  </div>

  <div class="page-content" style="bottom: 0">
    <div style="padding: 20px">
      <div style="position: relative; margin-bottom: 24px">
        <button 
          onclick="goToPage(1)" 
          style="position: absolute; left: 0; top: 4px; background: white; border: 1.5px solid #e2e8f0; width: 36px; height: 36px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #64748b; cursor: pointer; transition: all 0.3s"
          onmouseover="this.style.background='#f8fafc'; this.style.borderColor='#cbd5e1'"
          onmouseout="this.style.background='white'; this.style.borderColor='#e2e8f0'"
        >
          <i class="fas fa-arrow-left"></i>
        </button>
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">產品評價</h2>
        <p style="font-size: 14px; color: #64748b; padding-left: 48px; margin-top: 4px">查看並管理商品評價</p>
      </div>

      <!-- 評價統計總覽 -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px">
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)">
          <div style="font-size: 12px; color: #78350f; margin-bottom: 8px; font-weight: 600">平均評分</div>
          <div style="font-size: 32px; font-weight: 900; color: #78350f; margin-bottom: 4px">4.8</div>
          <div style="font-size: 14px; color: #92400e">⭐⭐⭐⭐⭐</div>
        </div>
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)">
          <div style="font-size: 12px; color: #064e3b; margin-bottom: 8px; font-weight: 600">總評價數</div>
          <div style="font-size: 32px; font-weight: 900; color: #064e3b; margin-bottom: 4px">2,348</div>
          <div style="font-size: 11px; color: #065f46">+156 本月新增</div>
        </div>
      </div>

      <!-- 搜尋框 -->
      <div style="position: relative; margin-bottom: 20px">
        <input 
          type="text" 
          placeholder="搜尋產品名稱..." 
          style="width: 100%; padding: 14px 46px 14px 16px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 14px; box-sizing: border-box"
          oninput="console.log('搜尋:', this.value)"
        >
        <i class="fas fa-search" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); color: #94a3b8; font-size: 16px"></i>
      </div>

      <!-- 評分篩選 -->
      <div style="display: flex; gap: 8px; margin-bottom: 20px; overflow-x: auto; padding-bottom: 4px">
        <button class="badge" style="padding: 10px 16px; background: #f5576c; color: white; border: none; cursor: pointer; white-space: nowrap; font-weight: 600">
          全部
        </button>
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          ⭐⭐⭐⭐⭐ 5分
        </button>
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          ⭐⭐⭐⭐ 4分
        </button>
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          ⭐⭐⭐ 3分以下
        </button>
      </div>

      <!-- 產品列表 -->
      <div style="display: grid; gap: 16px">
        <!-- 產品 1 -->
        <div class="card" style="padding: 0; overflow: hidden; cursor: pointer" onclick="document.getElementById('product-reviews-modal-1').style.display='flex'">
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=80&h=80&fit=crop" alt="Product" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 6px">經典風衣外套</h3>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px">
                  <div style="font-size: 20px">⭐⭐⭐⭐⭐</div>
                  <span style="font-size: 18px; font-weight: 800; color: #f59e0b">4.9</span>
                </div>
                <div style="font-size: 13px; color: #64748b">328 則評價</div>
              </div>
              <i class="fas fa-chevron-right" style="color: #cbd5e1; font-size: 18px; align-self: center"></i>
            </div>

            <!-- 評分分布 -->
            <div style="background: #f8fafc; padding: 12px; border-radius: 12px">
              <div style="display: grid; gap: 6px">
                <div style="display: flex; align-items: center; gap: 8px">
                  <span style="font-size: 12px; color: #64748b; width: 40px">5星</span>
                  <div style="flex: 1; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden">
                    <div style="width: 85%; height: 100%; background: #f59e0b"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 600; color: #1e293b; width: 35px; text-align: right">279</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px">
                  <span style="font-size: 12px; color: #64748b; width: 40px">4星</span>
                  <div style="flex: 1; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden">
                    <div style="width: 12%; height: 100%; background: #fbbf24"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 600; color: #1e293b; width: 35px; text-align: right">39</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px">
                  <span style="font-size: 12px; color: #64748b; width: 40px">3星</span>
                  <div style="flex: 1; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden">
                    <div style="width: 2%; height: 100%; background: #fcd34d"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 600; color: #1e293b; width: 35px; text-align: right">7</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px">
                  <span style="font-size: 12px; color: #64748b; width: 40px">1-2星</span>
                  <div style="flex: 1; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden">
                    <div style="width: 1%; height: 100%; background: #ef4444"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 600; color: #1e293b; width: 35px; text-align: right">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 產品 2 -->
        <div class="card" style="padding: 0; overflow: hidden; cursor: pointer" onclick="document.getElementById('product-reviews-modal-2').style.display='flex'">
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=80&h=80&fit=crop" alt="Product" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 6px">完美底妝組</h3>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px">
                  <div style="font-size: 20px">⭐⭐⭐⭐⭐</div>
                  <span style="font-size: 18px; font-weight: 800; color: #f59e0b">4.7</span>
                </div>
                <div style="font-size: 13px; color: #64748b">542 則評價</div>
              </div>
              <i class="fas fa-chevron-right" style="color: #cbd5e1; font-size: 18px; align-self: center"></i>
            </div>

            <div style="background: #f8fafc; padding: 12px; border-radius: 12px">
              <div style="display: grid; gap: 6px">
                <div style="display: flex; align-items: center; gap: 8px">
                  <span style="font-size: 12px; color: #64748b; width: 40px">5星</span>
                  <div style="flex: 1; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden">
                    <div style="width: 78%; height: 100%; background: #f59e0b"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 600; color: #1e293b; width: 35px; text-align: right">423</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px">
                  <span style="font-size: 12px; color: #64748b; width: 40px">4星</span>
                  <div style="flex: 1; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden">
                    <div style="width: 18%; height: 100%; background: #fbbf24"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 600; color: #1e293b; width: 35px; text-align: right">98</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px">
                  <span style="font-size: 12px; color: #64748b; width: 40px">3星</span>
                  <div style="flex: 1; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden">
                    <div style="width: 3%; height: 100%; background: #fcd34d"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 600; color: #1e293b; width: 35px; text-align: right">16</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px">
                  <span style="font-size: 12px; color: #64748b; width: 40px">1-2星</span>
                  <div style="flex: 1; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden">
                    <div style="width: 1%; height: 100%; background: #ef4444"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 600; color: #1e293b; width: 35px; text-align: right">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 產品 3 -->
        <div class="card" style="padding: 0; overflow: hidden; cursor: pointer" onclick="document.getElementById('product-reviews-modal-3').style.display='flex'">
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=80&h=80&fit=crop" alt="Product" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 6px">居家香氛蠟燭</h3>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px">
                  <div style="font-size: 20px">⭐⭐⭐⭐⭐</div>
                  <span style="font-size: 18px; font-weight: 800; color: #f59e0b">5.0</span>
                </div>
                <div style="font-size: 13px; color: #64748b">89 則評價</div>
              </div>
              <i class="fas fa-chevron-right" style="color: #cbd5e1; font-size: 18px; align-self: center"></i>
            </div>

            <div style="background: #f8fafc; padding: 12px; border-radius: 12px">
              <div style="display: grid; gap: 6px">
                <div style="display: flex; align-items: center; gap: 8px">
                  <span style="font-size: 12px; color: #64748b; width: 40px">5星</span>
                  <div style="flex: 1; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden">
                    <div style="width: 100%; height: 100%; background: #f59e0b"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 600; color: #1e293b; width: 35px; text-align: right">89</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px">
                  <span style="font-size: 12px; color: #64748b; width: 40px">4星</span>
                  <div style="flex: 1; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden">
                    <div style="width: 0%; height: 100%; background: #fbbf24"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 600; color: #1e293b; width: 35px; text-align: right">0</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px">
                  <span style="font-size: 12px; color: #64748b; width: 40px">3星</span>
                  <div style="flex: 1; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden">
                    <div style="width: 0%; height: 100%; background: #fcd34d"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 600; color: #1e293b; width: 35px; text-align: right">0</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px">
                  <span style="font-size: 12px; color: #64748b; width: 40px">1-2星</span>
                  <div style="flex: 1; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden">
                    <div style="width: 0%; height: 100%; background: #ef4444"></div>
                  </div>
                  <span style="font-size: 12px; font-weight: 600; color: #1e293b; width: 35px; text-align: right">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 產品評價詳情模態框 1 - 經典風衣外套 -->
  <div id="product-reviews-modal-1" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center; overflow-y: auto; padding: 20px" onclick="if(event.target === this) this.style.display='none'">
    <div style="background: white; border-radius: 24px; padding: 32px 24px; max-width: 500px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-height: 90vh; overflow-y: auto" onclick="event.stopPropagation()">
      <!-- 標題 -->
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 24px">
        <div style="flex: 1">
          <h3 style="font-size: 22px; font-weight: 800; color: #1e293b; margin-bottom: 8px">經典風衣外套</h3>
          <div style="display: flex; align-items: center; gap: 12px">
            <div style="font-size: 24px">⭐⭐⭐⭐⭐</div>
            <div>
              <div style="font-size: 28px; font-weight: 900; color: #f59e0b">4.9</div>
              <div style="font-size: 13px; color: #64748b">328 則評價</div>
            </div>
          </div>
        </div>
        <button onclick="document.getElementById('product-reviews-modal-1').style.display='none'" style="width: 32px; height: 32px; border-radius: 16px; border: none; background: #f1f5f9; color: #64748b; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <!-- 評價列表 -->
      <div style="display: grid; gap: 20px">
        <!-- 評價 1 -->
        <div style="padding: 16px; background: #f8fafc; border-radius: 16px">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px">
            <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop" alt="User" style="width: 40px; height: 40px; border-radius: 20px; object-fit: cover">
            <div style="flex: 1">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b">Emily Chen</div>
              <div style="font-size: 12px; color: #64748b">2024-01-15</div>
            </div>
            <div style="font-size: 18px">⭐⭐⭐⭐⭐</div>
          </div>
          
          <div style="font-size: 14px; color: #1e293b; line-height: 1.6; margin-bottom: 12px">
            質感超好！穿起來很有型，而且版型很修身。顏色也很正，完全符合期待。客服回覆也很快，很滿意這次購物體驗！
          </div>

          <!-- 評價照片 -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 12px">
            <img src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=120&h=120&fit=crop" alt="Review" style="width: 100%; aspect-ratio: 1; border-radius: 8px; object-fit: cover">
            <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=120&h=120&fit=crop" alt="Review" style="width: 100%; aspect-ratio: 1; border-radius: 8px; object-fit: cover">
            <img src="https://images.unsplash.com/photo-1578102718171-ec1f91680562?w=120&h=120&fit=crop" alt="Review" style="width: 100%; aspect-ratio: 1; border-radius: 8px; object-fit: cover">
          </div>

          <!-- 品牌回覆 -->
          <div style="padding: 12px; background: white; border-radius: 12px; border-left: 3px solid #f5576c">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px">
              <i class="fas fa-store" style="color: #f5576c; font-size: 14px"></i>
              <span style="font-size: 13px; font-weight: 700; color: #1e293b">品牌回覆</span>
            </div>
            <div style="font-size: 13px; color: #64748b; line-height: 1.5">
              非常感謝您的支持！很高興您滿意我們的產品 ❤️
            </div>
          </div>
        </div>

        <!-- 評價 2 -->
        <div style="padding: 16px; background: #f8fafc; border-radius: 16px">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop" alt="User" style="width: 40px; height: 40px; border-radius: 20px; object-fit: cover">
            <div style="flex: 1">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b">Sarah Lee</div>
              <div style="font-size: 12px; color: #64748b">2024-01-14</div>
            </div>
            <div style="font-size: 18px">⭐⭐⭐⭐⭐</div>
          </div>
          
          <div style="font-size: 14px; color: #1e293b; line-height: 1.6; margin-bottom: 12px">
            超級推薦！材質摸起來很舒服，穿起來也很保暖。朋友看到都問我在哪買的！
          </div>

          <!-- 回覆按鈕 -->
          <button class="btn btn-outline" style="padding: 8px 16px; font-size: 13px; width: 100%" onclick="alert('回覆評價')">
            <i class="fas fa-reply" style="margin-right: 6px"></i>回覆評價
          </button>
        </div>

        <!-- 評價 3 -->
        <div style="padding: 16px; background: #f8fafc; border-radius: 16px">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop" alt="User" style="width: 40px; height: 40px; border-radius: 20px; object-fit: cover">
            <div style="flex: 1">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b">Mike Wang</div>
              <div style="font-size: 12px; color: #64748b">2024-01-13</div>
            </div>
            <div style="font-size: 18px">⭐⭐⭐⭐</div>
          </div>
          
          <div style="font-size: 14px; color: #1e293b; line-height: 1.6; margin-bottom: 12px">
            整體不錯，但我覺得袖子稍微長了一點。不過版型很好看，值得購買。
          </div>

          <button class="btn btn-outline" style="padding: 8px 16px; font-size: 13px; width: 100%" onclick="alert('回覆評價')">
            <i class="fas fa-reply" style="margin-right: 6px"></i>回覆評價
          </button>
        </div>

        <!-- 評價 4 - 低分評價 -->
        <div style="padding: 16px; background: #fef2f2; border-radius: 16px; border: 1px solid #fecaca">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop" alt="User" style="width: 40px; height: 40px; border-radius: 20px; object-fit: cover">
            <div style="flex: 1">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b">Alex Lin</div>
              <div style="font-size: 12px; color: #64748b">2024-01-12</div>
            </div>
            <div style="font-size: 18px">⭐⭐⭐</div>
          </div>
          
          <div style="font-size: 14px; color: #1e293b; line-height: 1.6; margin-bottom: 12px">
            收到的顏色跟照片有點色差，實際看起來比較暗。希望商家可以改進照片的真實度。
          </div>

          <div style="padding: 10px; background: #fee2e2; border-radius: 8px; margin-bottom: 12px">
            <div style="display: flex; align-items: center; gap: 6px">
              <i class="fas fa-exclamation-triangle" style="color: #dc2626; font-size: 12px"></i>
              <span style="font-size: 12px; font-weight: 600; color: #991b1b">需要關注的評價</span>
            </div>
          </div>

          <button class="btn" style="padding: 8px 16px; font-size: 13px; width: 100%; background: #dc2626; color: white; border: none" onclick="alert('優先回覆此評價')">
            <i class="fas fa-reply" style="margin-right: 6px"></i>優先回覆
          </button>
        </div>
      </div>

      <!-- 關閉按鈕 -->
      <button class="btn" style="padding: 14px; background: #f1f5f9; border: none; color: #64748b; width: 100%; margin-top: 24px" onclick="document.getElementById('product-reviews-modal-1').style.display='none'">
        關閉
      </button>
    </div>
  </div>

  <!-- 產品評價詳情模態框 2 - 完美底妝組 -->
  <div id="product-reviews-modal-2" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center; overflow-y: auto; padding: 20px" onclick="if(event.target === this) this.style.display='none'">
    <div style="background: white; border-radius: 24px; padding: 32px 24px; max-width: 500px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-height: 90vh; overflow-y: auto" onclick="event.stopPropagation()">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 24px">
        <div style="flex: 1">
          <h3 style="font-size: 22px; font-weight: 800; color: #1e293b; margin-bottom: 8px">完美底妝組</h3>
          <div style="display: flex; align-items: center; gap: 12px">
            <div style="font-size: 24px">⭐⭐⭐⭐⭐</div>
            <div>
              <div style="font-size: 28px; font-weight: 900; color: #f59e0b">4.7</div>
              <div style="font-size: 13px; color: #64748b">542 則評價</div>
            </div>
          </div>
        </div>
        <button onclick="document.getElementById('product-reviews-modal-2').style.display='none'" style="width: 32px; height: 32px; border-radius: 16px; border: none; background: #f1f5f9; color: #64748b; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div style="text-align: center; color: #94a3b8; padding: 40px 20px">
        <i class="fas fa-star" style="font-size: 48px; opacity: 0.3; margin-bottom: 12px"></i>
        <div style="font-size: 14px">查看更多評價...</div>
      </div>

      <button class="btn" style="padding: 14px; background: #f1f5f9; border: none; color: #64748b; width: 100%" onclick="document.getElementById('product-reviews-modal-2').style.display='none'">
        關閉
      </button>
    </div>
  </div>

  <!-- 產品評價詳情模態框 3 - 居家香氛蠟燭 -->
  <div id="product-reviews-modal-3" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center; overflow-y: auto; padding: 20px" onclick="if(event.target === this) this.style.display='none'">
    <div style="background: white; border-radius: 24px; padding: 32px 24px; max-width: 500px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-height: 90vh; overflow-y: auto" onclick="event.stopPropagation()">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 24px">
        <div style="flex: 1">
          <h3 style="font-size: 22px; font-weight: 800; color: #1e293b; margin-bottom: 8px">居家香氛蠟燭</h3>
          <div style="display: flex; align-items: center; gap: 12px">
            <div style="font-size: 24px">⭐⭐⭐⭐⭐</div>
            <div>
              <div style="font-size: 28px; font-weight: 900; color: #f59e0b">5.0</div>
              <div style="font-size: 13px; color: #64748b">89 則評價</div>
            </div>
          </div>
        </div>
        <button onclick="document.getElementById('product-reviews-modal-3').style.display='none'" style="width: 32px; height: 32px; border-radius: 16px; border: none; background: #f1f5f9; color: #64748b; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <div style="text-align: center; padding: 40px 20px">
        <div style="font-size: 64px; margin-bottom: 16px">🎉</div>
        <div style="font-size: 20px; font-weight: 700; color: #10b981; margin-bottom: 8px">完美評分！</div>
        <div style="font-size: 14px; color: #64748b">所有客戶都給予 5 星好評</div>
      </div>

      <button class="btn" style="padding: 14px; background: #f1f5f9; border: none; color: #64748b; width: 100%" onclick="document.getElementById('product-reviews-modal-3').style.display='none'">
        關閉
      </button>
    </div>
  </div>
</div>
`;
